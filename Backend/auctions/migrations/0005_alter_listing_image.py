# Generated by Django 5.0.2 on 2024-03-07 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0004_rename_timestamp_comment_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
