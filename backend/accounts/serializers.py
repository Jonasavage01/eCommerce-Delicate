from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.db import IntegrityError
from django.contrib.auth.hashers import make_password
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError as DjangoValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[EmailValidator(message="Please enter a valid email address.")]
    )
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        error_messages={
            "min_length": "Password must be at least 8 characters long."
        }
    )

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def create(self, validated_data):
        try:
            validated_data['password'] = make_password(validated_data.get('password'))
            user = User.objects.create_user(**validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'email': ['This email is already registered.']})
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.message_dict)
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(username=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError('User is inactive')
                data = super().validate(attrs)
                data['user'] = {
                    'email': user.email
                }
                return data
            else:
                raise serializers.ValidationError('Incorrect email or password')
        else:
            raise serializers.ValidationError('Must include "email" and "password"')
        
        return data
