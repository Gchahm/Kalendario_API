# Generated by Django 3.0.14 on 2021-05-19 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0048_auto_20210129_1821'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='warning',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
