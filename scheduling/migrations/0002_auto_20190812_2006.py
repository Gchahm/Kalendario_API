# Generated by Django 2.2.3 on 2019-08-12 20:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='schedule',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='scheduling.Schedule'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='fri',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fri', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='mon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='mon', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='sat',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sat', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='sun',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sun', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='thu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='thu', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='tue',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tue', to='scheduling.Shift'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='wed',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='wed', to='scheduling.Shift'),
        ),
    ]