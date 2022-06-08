from inspect import getmembers
from django.urls import path 
from .views import *



urlpatterns=[
    
    path('',index),
    path('event/<id>',getEvent),
    path('members',getMembers),

    
]