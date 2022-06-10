from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Member)
admin.site.register(Cell)
admin.site.register(Event)
admin.site.register(EventLink)
admin.site.register(EventLocalisation)
admin.site.register(EventDay)
admin.site.register(Sponsor)
admin.site.register(Speaker)