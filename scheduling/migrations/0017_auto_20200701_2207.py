# Generated by Django 3.0.7 on 2020-07-01 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0016_auto_20200627_1231'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedulingpanel',
            name='employees',
            field=models.ManyToManyField(blank=True, to='scheduling.Employee'),
        ),
    ]