---
layout: post
title:  "Controlling with MIDI"
date:   2016-01-14 15:10:00
categories: news
---

Faust programs can be controlled using MIDI messages. Thanks to the metadata mechanism, all UI elements (sliders, button, bargraph...) can send and receive MIDI data.

### Adding MIDI messages description in the dsp source code ###

MIDI control messages are described as metadata in UI elements. They are decoded by a new **MidiUI** class that will parse incoming MIDI messages and update the appropriate control parameters, or send MIDI when the UI elements (sliders, buttons....) are moved.

#### Description of the possible standard MIDI messages ####

- **[midi:ctrl num]** in a slider or bargraph will map the UI element value to (0,127) range. When used with a button or checkbox, 1 will be mapped to 127, 0 will be mapped to 0,
- **[midi:keyon pitch]** in a slider or bargraph will register the UI element's state-variable to be driven by MIDI note-on velocity (an integer between 0 and 127) of the specified key between 0 and 127. When used with a button or checkbox, 1 will be mapped to 127, 0 will be mapped to 0,
- **[midi:keyoff pitch]** in a slider or bargraph will register the UI element's state-variable to be driven by MIDI note-off velocity (an integer between 0 and 127) of the specified key between 0 and 127. When used with a button or checkbox, 1 will be mapped to 127, 0 will be mapped to 0,
- **[midi:key pitch]** in a slider or bargraph will register the UI element's state-variable to be driven by MIDI note-on velocity (an integer between 0 and 127) of the specified key between 0 and 127. When used with a button or checkbox, 1 will be mapped to 127, 0 will be mapped to 0.  Note-on and note-off events will be handled,
- **[midi:keypress pitch]** in a slider or bargraph will map the UI element value to keypress value in the (0,127) range. When used with a button or checkbox, 1 will be mapped to 127, 0 will be mapped to 0,
- **[midi:pgm num]** in a slider or bargraph will map the UI element value to the progchange value, so "progchange" message with the same "num" value will be sent. When used with a button or checkbox, 1 will send the "progchange" message with "num" value, 0 will send nothing,
- **[midi:chanpress num]** in a slider or bargraph will map the UI element value to the chanpress value, so "chanpress" message with the same "num" value will be sent. When used with a button or checkbox, 1 will send the "chanpress" message with "num" value, 0 will send nothing,
- **[midi:pitchwheel]** in a slider or bargraph will map the UI element value to (0,16383) range. When used with a button or checkbox, 1 will be mapped to 16383, 0 will be mapped to 0.

#### MIDI synchronization ####

MIDI clock based synchronization can be used to *slave* a given Faust program. The following three messages need to be used:

- **[midi:start]** in a button or checkbox will trigger a value of 1 when a *start* MIDI message is received
- **[midi:stop]** in a button or checkbox will trigger a value of 0 when a *stop* MIDI message is received
- **[midi:clock]** in a button or checkbox will deliver a sequence of successive 1 and 0 values each time a *clock* MIDI message is received, seen by seen by Faust code as a square command signal, to be used to compute higher level information.
.

A typical Faust program will then use the MIDI clock stream to possibly compute the BPM information, or for any synchronization need it may have. Here is a simple example of a sinusoide generated which a frequency controlled by the  MIDI clock stream, and starting/stopping when receiving the MIDI start/stop messages:

    import("stdfaust.lib");

    // square signal (1/0), changing state at each received clock
    clocker   = checkbox("MIDI clock[midi:clock]");    

    // ON/OFF button controlled with MIDI start/stop messages
    play      = checkbox("ON/OFF [midi:start] [midi:stop]");    

    // detect front
    front(x)  = (x-x') != 0.0;      

    // count number of peaks during one second
    freq(x)   = (x-x@ma.SR) : + ~ _;   

    process   = os.osc(8*freq(front(clocker))) * play;

#### Activating the MIDI interface (for developers) ####

For multi-platform support, the MidiUI class uses the [RTMidi](https://www.music.mcgill.ca/~gary/rtmidi/) framework. Add the following line into your code to get it compiled:

    #include "faust/midi/RtMidi.cpp"

As with other UI objects, MidiUI is to be given as parameter to the dsp **buildUserInterface** method:

    MidiUI midiinterface(name);
    DSP->buildUserInterface(&midiinterface);
    ....
    midiinterface.run();
    
To be used with JACK MIDI, use the **jackaudio_midi** class (instead of the standard **jackaudio** JACK API using class):

    jackaudio_midi audio;
    audio.init(name, DSP);
    ...
    
    // JACK MIDI aware object used by the MidiUI MIDI messages handling class
    MidiUI midiinterface(&audio);  
    DSP->buildUserInterface(&midiinterface);
    ....
    midiinterface.run();

#### Activating the MIDI interface (for users) ####

Several architecture files and associated scripts have been updated to handle MIDI aware dsp code:

- use **faust2caqt -midi foo.dsp** to create a MIDI aware CoreAudio/QT application on OSX
- use **faust2jaqt -midi foo.dsp** to create a MIDI aware JACK/QT application on Linux and OSX
- use **faust2ios -midi foo.dsp** to create a MIDI aware iOS application
- use **faust2alsa -midi foo.dsp** to create a MIDI aware ALSA/GTK application on Linux
- use **faust2alqt -midi foo.dsp** to create a MIDI aware ALSA/QT application on Linux.
 
Note that the **buildUserInterface** method for polyphonic instruments (defined using the **mydsp_poly** class) called with a MidiUI object, will automatically connect to the MIDI system, to be ready to handle incoming keyOn/keyOff MIDI messages and so on. See [Creating polyphonic instruments](/news/2016/01/13/polyphonic-instruments.html) page for more informations.
