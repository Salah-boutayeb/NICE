from django.db import models

# Create your models here.
class Member(models.Model):
    nom=models.CharField(max_length=255)
    prenom=models.CharField(max_length=255)
    image=models.ImageField()
    description=models.CharField(max_length=255)
    def __str__(self):
        return self.nom +' ' +self.prenom

class Cell(models.Model):
    nom=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField()
    chef = models.OneToOneField(Member, blank=True, null=True,related_name='chef',on_delete=models.CASCADE)
    co_chef = models.OneToOneField(Member,blank=True, null=True,related_name='co_chef',on_delete=models.CASCADE)
    members = models.ManyToManyField(Member,blank=True, null=True,related_name='members')
    def __str__(self):
        return self.nom 


# class Role(models.Model):
#     role = models.CharField(
#             choices=(('chef','chef'),('co-chef','co-chef'),('member','member'),('vp','vp'),('p','p')),
#             blank=False,
#             max_length=50
#     )
#     member=models.ForeignKey(Member,on_delete=models.CASCADE)    
#     cell=models.ForeignKey(Cell,null=True, blank=True,on_delete=models.CASCADE)
#     def __str__(self):
#         return self.role
class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to="thumbnail")
    created = models.DateTimeField(auto_now_add=True)
    eventDay = models.DateField(null=True)
    
    def __str__(self):
        return self.title

class EventLink(models.Model):
    title =  models.CharField(
             choices=(('facebook','facebook'),('instagram','instagram'),('linkedin','linkedin')),
             blank=False,
             max_length=50
     )
    url = models.CharField(max_length=255)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class EventLocalisation(models.Model):
    event = models.OneToOneField(Event, on_delete=models.CASCADE,primary_key=True)
    locale_name = models.CharField(max_length=255)
    x_locale = models.DecimalField(max_digits=9, decimal_places=6)
    y_locale = models.DecimalField(max_digits=9, decimal_places=6)
    def __str__(self):
        return self.locale_name

class Sponsor(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()
    def __str__(self):
        return self.name

class Speaker(models.Model):
    full_name = models.CharField(max_length=255)
    image = models.ImageField()
    description = models.TextField(blank=True)    
    def __str__(self):
        return self.full_name