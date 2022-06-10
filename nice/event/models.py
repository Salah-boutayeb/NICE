from django.db import models

# Create your models here.


class Member(models.Model):
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    image = models.ImageField()
    description = models.CharField(max_length=255)
    linkedin = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.nom + ' ' + self.prenom


class Cell(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField()
    chef = models.OneToOneField(
        Member, blank=True, null=True, related_name='chef', on_delete=models.CASCADE)
    co_chef = models.OneToOneField(
        Member, blank=True, null=True, related_name='co_chef', on_delete=models.CASCADE)
    members = models.ManyToManyField(
        Member, blank=True, related_name='members')

    def __str__(self):
        return self.nom

class EventDay(models.Model):
    name = models.CharField(max_length=255)
    eventDay = models.DateField(null=True)
    def __str__(self):
        return self.name



class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to="thumbnail")
    created = models.DateTimeField(auto_now_add=True)
    places = models.IntegerField(null=True)
    eventDay = models.ForeignKey(EventDay,null=True,blank=True,on_delete=models.CASCADE)
    def __str__(self):
        return self.title


class EventLink(models.Model):
    title = models.CharField(
        choices=(('facebook', 'facebook'), ('instagram',
                 'instagram'), ('linkedin', 'linkedin')),
        blank=False,
        max_length=50
    )
    url = models.CharField(max_length=255)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return self.title +" of "+ self.event.title


class EventLocalisation(models.Model):
    event = models.OneToOneField(
        Event, on_delete=models.CASCADE, primary_key=True)
    locale_name = models.CharField(max_length=255)
    x_locale = models.DecimalField(max_digits=9, decimal_places=6)
    y_locale = models.DecimalField(max_digits=9, decimal_places=6)

    def __str__(self):
        return self.locale_name +" of "+ self.event.title

class Sponsor(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Speaker(models.Model):
    full_name = models.CharField(max_length=255)
    image = models.ImageField()
    description = models.CharField(max_length=255, null=True,blank=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    linkedin = models.CharField(max_length=255, null=True,blank=True)
    #TODO anas here: prob d hadi speaker dima 3ndo event wa7ed


    def __str__(self):
        return self.full_name
