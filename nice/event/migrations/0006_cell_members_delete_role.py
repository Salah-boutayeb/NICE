# Generated by Django 4.0.5 on 2022-06-08 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0005_remove_cell_member_role_cell'),
    ]

    operations = [
        migrations.AddField(
            model_name='cell',
            name='members',
            field=models.ManyToManyField(to='event.member'),
        ),
        migrations.DeleteModel(
            name='Role',
        ),
    ]
