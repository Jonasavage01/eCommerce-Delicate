from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.db import models


class User(AbstractUser):
    pass

class Category(models.Model):
    categoryName = models.CharField(max_length=255)
    
    def __str__(self):
        return self.categoryName

class Listing(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=350)
    image = models.ImageField(upload_to='listings/') 
    background_image = models.ImageField(upload_to='user_backgrounds/', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, related_name="listings")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    highest_bid = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    highest_bidder = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=10, choices=[('open', 'Open'), ('closed', 'Closed')], default='open')

    def update_highest_bid(self, new_bid, bidder):
        if self.highest_bid is None or new_bid > self.highest_bid:
            self.highest_bid = new_bid
            self.highest_bidder = bidder
            self.save()
    def update_highest_bid(self, new_bid, bidder):
        if self.highest_bid is None or new_bid > self.highest_bid:
            self.highest_bid = new_bid
            self.highest_bidder = bidder
            self.save()

class Watchlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)

class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.listing.title}'
    
    

