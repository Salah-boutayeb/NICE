# Generated by Django 4.0.5 on 2022-06-10 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0015_alter_speaker_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('eventDay', models.DateField(null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='event',
            name='eventDay',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='event.eventday'),
        ),
    ]
