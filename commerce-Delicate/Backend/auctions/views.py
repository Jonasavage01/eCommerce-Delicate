from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden, HttpResponseBadRequest
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from .forms import ListingForm, CommentForm
from django.contrib.auth.decorators import login_required
from .models import User, Listing, Category, Watchlist, Bid, Comment
from django.conf import settings
from django.core.files import File
import urllib.request
import os
from .forms import PlaceBidForm
from .forms import CloseAuctionForm


def index(request):
    # Fetch active listings
    active_listings = Listing.objects.filter(is_active=True)
    all_categories = Category.objects.all()  # Renamed variable

    return render(request, "auctions/index.html", {"active_listings": active_listings, "categories": all_categories})

def showCategory(request):
    selected_category = None
    all_categories = Category.objects.all()
    active_listings = Listing.objects.filter(is_active=True)

    if request.method == "POST":
        category_from_form = request.POST.get('category')
        if category_from_form:  # If a specific category is chosen
            category = get_object_or_404(Category, categoryName=category_from_form)
            active_listings = active_listings.filter(category=category)
            selected_category = category.categoryName

    return render(request, "auctions/index.html", {
        "active_listings": active_listings,
        "categories": all_categories,
        "selected_category": selected_category
    })

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "auctions/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "auctions/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "auctions/register.html")


@login_required
def listing(request):
    if request.method == "POST":
        form = ListingForm(request.POST, request.FILES)
        if form.is_valid():
            listing = form.save(commit=False)
            listing.owner = request.user
            listing.save()
            return redirect("index")
        else:
            # If form is invalid, render the form again with validation errors
            return render(request, "auctions/listing.html", {"form": form})
    else:
        form = ListingForm()
    return render(request, "auctions/listing.html", {"form": form})

@login_required
def add_to_watchlist(request, listing_id):
    listing = get_object_or_404(Listing, pk=listing_id)
    watchlist_item, created = Watchlist.objects.get_or_create(user=request.user, listing=listing)
    if created:
        message = "Listing added to watchlist successfully."
    else:
        message = "Listing is already in your watchlist."
    
    # Redirect to the watchlist page
    return redirect('watchlist')

@login_required
def remove_from_watchlist(request, listing_id):
    listing = get_object_or_404(Listing, pk=listing_id)
    try:
        watchlist_item = Watchlist.objects.get(user=request.user, listing=listing)
        watchlist_item.delete()
        message = "Listing removed from watchlist successfully."
    except Watchlist.DoesNotExist:
        message = "Listing is not in your watchlist."
    return render(request, "auctions/listing_detail.html", {"listing": listing, "message": message})

@login_required
def place_bid(request, listing_id):
    if request.method == "POST":
        bid_amount = request.POST.get('bid_amount')
        listing = get_object_or_404(Listing, pk=listing_id)
        try:
            highest_bid = Bid.objects.filter(listing=listing).latest('amount')
        except Bid.DoesNotExist:
            highest_bid = None
        if highest_bid is None or float(bid_amount) > highest_bid.amount:
            bid = Bid(user=request.user, listing=listing, amount=bid_amount)
            bid.save()
            message = "Bid placed successfully."
        else:
            message = "Your bid amount should be higher than the current highest bid."
    else:
        message = "Invalid request method."
    
    context = {
        "listing": listing,
        "message": message,
        # Include other necessary context variables
    }
    return render(request, "auctions/listing_detail.html", context)

@login_required
def close_auction(request, listing_id):
    listing = get_object_or_404(Listing, pk=listing_id)
    if request.user == listing.owner:
        if listing.is_active:
            listing.is_active = False
            highest_bid = Bid.objects.filter(listing=listing).order_by('-amount').first()
            if highest_bid:
                listing.highest_bidder = highest_bid.user
                listing.save()
                message = "Auction closed successfully. Winner: {}".format(highest_bid.user.username)
            else:
                message = "No bids were placed for this listing."
        else:
            message = "Auction is already closed."
    else:
        message = "You are not authorized to close this auction."
        
        return HttpResponseRedirect(reverse('some_success_page'))
    
    # or include a success message and render the same page
    context = {
        "listing": listing,
        "message": message,
        # Include other necessary context variables
    }
    return render(request, "auctions/listing_detail.html", context)


@login_required
def add_comment(request, listing_id):
    listing = None  # Define listing variable with a default value
    if request.method == "POST":
        comment_text = request.POST.get('comment_text')  # Assuming 'comment_text' is the name of the input field in your form
        if comment_text:  # Ensure the comment text is not empty
            listing = get_object_or_404(Listing, pk=listing_id)
            comment = Comment(user=request.user, listing=listing, text=comment_text)
            comment.save()
            message = "Comment added successfully."
        else:
            message = "Comment text cannot be empty."
    else:
        message = "Invalid request method."
    return render(request, "auctions/listing_detail.html", {"listing": listing, "message": message})


from django.db.models import Max

@login_required
def listing_detail(request, listing_id):
    listing = get_object_or_404(Listing, pk=listing_id)
    comments = Comment.objects.filter(listing=listing)
    is_on_watchlist = False

    if request.user.is_authenticated:
        try:
            Watchlist.objects.get(user=request.user, listing=listing)
            is_on_watchlist = True
        except Watchlist.DoesNotExist:
            pass

    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.listing = listing
            comment.user = request.user
            comment.save()
            return redirect('listing_detail', listing_id=listing_id)
    else:
        form = CommentForm()

    # Check if the user is the owner of the listing
    is_listing_owner = request.user == listing.owner

    # Initialize variables for close auction and place bid forms
    close_auction_form = None
    place_bid_form = None

    # Close Auction Form
    close_auction_form = None

    if is_listing_owner:
        if listing.is_active:
            if request.method == 'POST':
                close_auction_form = CloseAuctionForm(request.POST)
                if close_auction_form.is_valid():
                    # Perform actions to close the auction
                    # For example:
                    # listing.is_active = False
                    # listing.save()
                    message = "Auction closed successfully."
            else:
                close_auction_form = CloseAuctionForm()
        else:
            message = "This auction is closed."

    # Place Bid Form
    else:
        if listing.is_active:
            place_bid_form = PlaceBidForm()

    # Determine the current bid amount
    try:
        highest_bid = Bid.objects.filter(listing=listing).aggregate(Max('amount'))['amount__max']
        current_bid_amount = highest_bid if highest_bid else listing.price
    except Bid.DoesNotExist:
        current_bid_amount = listing.price

    context = {
        'listing': listing,
        'comments': comments,
        'comment_form': form,
        'is_on_watchlist': is_on_watchlist,
        'is_listing_owner': is_listing_owner,
        'close_auction_form': close_auction_form,
        'place_bid_form': place_bid_form,
        'current_bid_amount': current_bid_amount,
    }

    return render(request, "auctions/listing_detail.html", context)




@login_required
def watchlist(request):
    watchlist_items = Watchlist.objects.filter(user=request.user)
    return render(request, "auctions/watchlist.html", {"watchlist_items": watchlist_items})

@login_required
def delete_watchlist_item(request, item_id):
    watchlist_item = get_object_or_404(Watchlist, pk=item_id)
    if watchlist_item.user == request.user:
        watchlist_item.delete()
        return redirect('watchlist')
    else:
        return HttpResponseForbidden("You are not authorized to delete this item from the watchlist.")
    
@login_required
def watchlist_action(request, listing_id, action):
    listing = get_object_or_404(Listing, pk=listing_id)
    try:
        watchlist_item = Watchlist.objects.get(user=request.user, listing=listing)
        if action == 'add':
            message = "Listing is already in your wishlist."
        elif action == 'remove':
            watchlist_item.delete()
            message = "Listing removed from wishlist successfully."
        else:
            return HttpResponseBadRequest("Invalid action.")
    except Watchlist.DoesNotExist:
        if action == 'add':
            watchlist_item = Watchlist.objects.create(user=request.user, listing=listing)
            message = "Listing added to wishlist successfully."
        else:
            return HttpResponseBadRequest("Invalid action.")
    return redirect('listing_detail', listing_id=listing_id)