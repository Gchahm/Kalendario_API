# Generated by Django 3.0.7 on 2021-01-10 12:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0045_auto_20210103_2109'),
        ('billing', '0003_auto_20210109_1633'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='StripeAccount',
            new_name='Account',
        ),
    ]