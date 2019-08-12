# Generated by Django 2.2.3 on 2019-08-12 19:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import scheduling.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('duration', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('core.user',),
            managers=[
                ('objects', scheduling.managers.CustomerManager()),
            ],
        ),
        migrations.CreateModel(
            name='TimeFrame',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.TimeField()),
                ('end', models.TimeField()),
                ('shift', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scheduling.Shift')),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('fri', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fri', to='scheduling.Shift')),
                ('mon', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='mon', to='scheduling.Shift')),
                ('sat', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sat', to='scheduling.Shift')),
                ('sun', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sun', to='scheduling.Shift')),
                ('thu', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='thu', to='scheduling.Shift')),
                ('tue', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tue', to='scheduling.Shift')),
                ('wed', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='wed', to='scheduling.Shift')),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('instagram', models.CharField(max_length=200, null=True)),
                ('schedule', models.ForeignKey(null='true', on_delete=django.db.models.deletion.SET_NULL, to='scheduling.Schedule')),
                ('services', models.ManyToManyField(to='scheduling.Service')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateTimeField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scheduling.Customer')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scheduling.Employee')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scheduling.Service')),
            ],
        ),
    ]
