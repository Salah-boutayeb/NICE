# Generated by Django 4.0.5 on 2022-06-10 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0014_speaker_linkedin_alter_cell_members'),
    ]

    operations = [
        migrations.AlterField(
            model_name='speaker',
            name='description',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
