# signals.py

from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes

@receiver(post_save, sender=CustomUser)
def send_verification_email(sender, instance, **kwargs):
    if kwargs['created']:
        token = default_token_generator.make_token(instance)
        uid = urlsafe_base64_encode(force_bytes(instance.pk))
        verify_url = f"{settings.FRONTEND_URL}/verify/{uid}/{token}"

        subject = 'Verify your email'
        html_message = render_to_string('emails/verify_email.html', {'verify_url': verify_url})
        plain_message = strip_tags(html_message)
        from_email = settings.DEFAULT_FROM_EMAIL
        to_email = instance.email

        try:
            send_mail(subject, plain_message, from_email, [to_email], html_message=html_message)
        except BadHeaderError:
            # Log the error and possibly retry sending email
            logging.error(f"Failed to send verification email to {to_email}")
