from django.shortcuts import render
from .models import *
# Create your views here.


def index(request):
    
    # event
    events_day_one=[]
    events_day_two=[]

    days=[]
    for day in EventDay.objects.all():
        days.append(day)
    
    events_day_one= Event.objects.filter(eventDay=days[0])
    print(events_day_one)
    
    events_day_two=Event.objects.filter(eventDay=days[1])
    
        
            
    
    

    """ for event in events:
        event_info = {}
        event_info['event'] = event

        event_info['eventlinks'] = event.eventlink_set.all()

        event_info['eventlocalisation'] = event.eventlocalisation
        event_info['speakers']=event.speaker_set.all()

        events_obj['events'].append(event_info) """

    #TODO from anas: Group events by day

    # sponsors
    sponsors = Sponsor.objects.all()
    # speakers
    speakers = Speaker.objects.all()


#   context 
    context = {
        'events': Event.objects.all(),
        'days':days,
        'events_day_one':events_day_one,
        'events_day_two':events_day_two,
        'sponsors': sponsors,
        'cells': Cell.objects.all(),
        'speakers': speakers
    }

    return render(request, 'index.html', context)


def getEvent(request, id):
    event = Event.objects.get(pk=id)
    eventlinks = EventLink.objects.filter(event=event)
    eventlocalisation = EventLocalisation.objects.filter(event=event)
    eventspeakers = Speaker.objects.filter(event=event)
    context = {'event': event, "eventlinks": eventlinks,
               "eventlocalisation": eventlocalisation,"speakers":eventspeakers }

    return render(request, 'event.html', context)


def getMembers(request):
    cells = Cell.objects.all()
    context = {"cells": cells}
    return render(request, 'members.html', context)
