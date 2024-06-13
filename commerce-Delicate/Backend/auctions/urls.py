from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path('listing/', views.listing, name='listing'),
    path("showCategory", views.showCategory, name="showCategory"),
    path('listing/<int:listing_id>/', views.listing_detail, name='listing_detail'),
    path('watchlist/', views.watchlist, name='watchlist'),
    path('delete_watchlist_item/<int:item_id>/', views.delete_watchlist_item, name='delete_watchlist_item'),
    path('auction/', include([
        path('add_to_watchlist/<int:listing_id>/', views.watchlist_action, {'action': 'add'}, name='add_to_watchlist'),
        path('remove_from_watchlist/<int:listing_id>/', views.watchlist_action, {'action': 'remove'}, name='remove_from_watchlist'),
        path('place_bid/<int:listing_id>/', views.place_bid, name='place_bid'),
        path('close_auction/<int:listing_id>/', views.close_auction, name='close_auction'),
        path('add_comment/<int:listing_id>/', views.add_comment, name='add_comment'),
        
    ])),
]

# Add URL pattern for serving media files during development
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
