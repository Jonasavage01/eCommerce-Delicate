from django import forms
from .models import Listing, Category, Comment
from django.core.files import File
import urllib.request


class ListingForm(forms.ModelForm):
    class Meta:
        model = Listing
        fields = ['title', 'description', 'price', 'image', 'category']
        widgets = {
            'image': forms.FileInput(attrs={'accept': 'image/*'})  # Allow only image files
        }

    def clean_image(self):
        image = self.cleaned_data.get('image')
        if image and not hasattr(image, 'url'):
            # Since the file does not have a URL, we simply return the image as is
            return image
        # Other validation logic can be added here if necessary
        return image


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].queryset = Category.objects.all()  # Populate dropdown menu with categories

    def clean_price(self):
        price = self.cleaned_data.get('price')
        if price is None or price <= 0:
            raise forms.ValidationError("Price must be a positive number.")
        return price

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['text']
        
        
class PlaceBidForm(forms.Form):
    bid_amount = forms.DecimalField(label='Bid Amount', min_value=0.01)
    
class CloseAuctionForm(forms.Form):
    confirm_close = forms.BooleanField(label='Confirm to close auction', required=True)

    def clean_confirm_close(self):
        confirm_close = self.cleaned_data.get('confirm_close')
        if not confirm_close:
            raise forms.ValidationError("You must confirm to close the auction.")
        return confirm_close 