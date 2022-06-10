from django.shortcuts import render
from .models import *
# Create your views here.


def index(request):
    events = Event.objects.all()
    events_obj = {"events": []}
    # event
    for event in events:
        event_info = {}
        event_info['event'] = event

        event_info['eventlinks'] = event.eventlink_set.all()

        event_info['eventlocalisation'] = event.eventlocalisation
        # event_info['speakers']=event.speaker_set.all()

        events_obj['events'].append(event_info)

    # sponsors
    sponsors = Sponsor.objects.all()

    speakers = Speaker.objects.all()

    context = {
        'events': events_obj['events'],
        'sponsors': sponsors,
        'cells': Cell.objects.all(),
        'speakers': speakers
    }

    return render(request, 'index.html', context)


def getEvent(request, id):
    event = Event.objects.get(pk=id)
    eventlinks = EventLink.objects.filter(event=event)
    eventlocalisation = EventLocalisation.objects.filter(event=event)

    context = {'event': event, "eventlinks": eventlinks,
               "eventlocalisation": eventlocalisation}

    return render(request, 'event.html', context)


def getMembers(request):
    cells = Cell.objects.all()
    context = {"cells": cells}

    return render(request, 'members.html', context)
