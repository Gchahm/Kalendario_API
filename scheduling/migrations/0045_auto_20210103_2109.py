# Generated by Django 3.0.7 on 2021-01-03 21:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0044_company_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='_stripe_charges_enabled',
        ),
        migrations.RemoveField(
            model_name='company',
            name='_stripe_customer_id',
        ),
        migrations.RemoveField(
            model_name='company',
            name='_stripe_default_currency',
        ),
        migrations.RemoveField(
            model_name='company',
            name='_stripe_details_submitted',
        ),
        migrations.RemoveField(
            model_name='company',
            name='_stripe_payouts_enabled',
        ),
    ]
