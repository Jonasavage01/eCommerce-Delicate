# Generated by Django 5.0.2 on 2024-07-24 13:40

import accounts.validators
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_customuser_email_alter_customuser_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='password',
            field=models.CharField(max_length=128, validators=[django.core.validators.MinLengthValidator(8, message='Password must be at least 8 characters long.'), accounts.validators.UppercaseValidator(min_upper=1), accounts.validators.LowercaseValidator(min_lower=1), accounts.validators.SymbolValidator(min_symbols=1)]),
        ),
    ]
