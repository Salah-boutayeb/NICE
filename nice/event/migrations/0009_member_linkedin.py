# Generated by Django 4.0.5 on 2022-06-10 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0008_alter_eventlink_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='linkedin',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
