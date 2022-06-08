# Generated by Django 4.0.5 on 2022-06-07 21:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_rename_sponsors_sponsor_alter_role_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='cell',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.cell'),
        ),
        migrations.AlterField(
            model_name='role',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.member'),
        ),
    ]