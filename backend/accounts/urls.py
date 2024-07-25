# accounts/urls.py
from django.urls import path
from .views import MyTokenObtainPairView, RegisterView, UserProfileView, VerifyEmailView, ProtectedView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('verify-email/<uidb64>/<token>/', VerifyEmailView.as_view(), name='verify_email'),
    path('protected/', ProtectedView.as_view(), name='protected_view'),
]
