from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

class UppercaseValidator:
    def __init__(self, min_upper=1):
        self.min_upper = min_upper

    def __call__(self, password):
        if sum(1 for c in password if c.isupper()) < self.min_upper:
            raise ValidationError(
                _("The password must contain at least %(min_upper)d uppercase letter."),
                code='password_no_upper',
                params={'min_upper': self.min_upper},
            )

    def get_help_text(self):
        return _(
            "Your password must contain at least %(min_upper)d uppercase letter."
        ) % {'min_upper': self.min_upper}

    def deconstruct(self):
        return (
            'accounts.validators.UppercaseValidator',  # Import path
            [],  # Positional arguments
            {'min_upper': self.min_upper},  # Keyword arguments
        )

class LowercaseValidator:
    def __init__(self, min_lower=1):
        self.min_lower = min_lower

    def __call__(self, password):
        if sum(1 for c in password if c.islower()) < self.min_lower:
            raise ValidationError(
                _("The password must contain at least %(min_lower)d lowercase letter."),
                code='password_no_lower',
                params={'min_lower': self.min_lower},
            )

    def get_help_text(self):
        return _(
            "Your password must contain at least %(min_lower)d lowercase letter."
        ) % {'min_lower': self.min_lower}

    def deconstruct(self):
        return (
            'accounts.validators.LowercaseValidator',  # Import path
            [],  # Positional arguments
            {'min_lower': self.min_lower},  # Keyword arguments
        )

class SymbolValidator:
    def __init__(self, min_symbols=1):
        self.min_symbols = min_symbols

    def __call__(self, password):
        symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/"
        if sum(1 for c in password if c in symbols) < self.min_symbols:
            raise ValidationError(
                _("The password must contain at least %(min_symbols)d symbol."),
                code='password_no_symbol',
                params={'min_symbols': self.min_symbols},
            )

    def get_help_text(self):
        return _(
            "Your password must contain at least %(min_symbols)d symbol."
        ) % {'min_symbols': self.min_symbols}

    def deconstruct(self):
        return (
            'accounts.validators.SymbolValidator',  # Import path
            [],  # Positional arguments
            {'min_symbols': self.min_symbols},  # Keyword arguments
        )
        
class CustomPasswordValidator:
    def validate(self, password, user=None):
        if len(password) < 8:
            raise ValidationError("Password must be at least 8 characters long.")
        # Add other password checks as needed

    def get_help_text(self):
        return "Your password must contain at least 8 characters."
