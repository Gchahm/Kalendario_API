# Generated by Django 2.2.3 on 2020-03-25 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0002_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='color',
            field=models.CharField(default='#FFFFFF', max_length=7),
        ),
    ]
