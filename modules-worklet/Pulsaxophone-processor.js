
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONPulsaxophone() {
	return "{\"name\":\"Pulsaxophone\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"861556\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Pulsaxo\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Pulsaxo/Frequency\",\"index\":\"716\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Speed_(Granulator)\",\"index\":\"76\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Probability_(Granulator)\",\"index\":\"48\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/Pulsaxo/Vibrato_Frequency\",\"index\":\"688\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Pulsaxo/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"33640\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.1\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodePulsaxophone() { return "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LWZ0eiAyIiwic2l6ZSI6Ijg2MTU1NiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJQdWxzYXhvcGhvbmUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUHVsc2F4byIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9QdWxzYXhvL0ZyZXF1ZW5jeSIsImluZGV4IjoiNzE2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMiAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIxMTAiLCJtaW4iOiI4MCIsIm1heCI6Ijg4MCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQdWxzZSIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9QdWxzYXhvL1B1bHNlL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiNzYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuMDAxIiwibWF4IjoiNyIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1B1bHNheG8vUHVsc2UvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1B1bHNheG8vVmlicmF0b19GcmVxdWVuY3kiLCJpbmRleCI6IjY4OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI2IiwibWluIjoiMSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9QdWxzYXhvL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMzY0MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43MiIsIm1pbiI6IjAuMSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

faust.b64ToUint6 = function (nChr)
{
    return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
}

faust.atob = function (sBase64, nBlocksSize)
{
    if (typeof atob === 'function') {
        return atob(sBase64);
    } else {
        
        var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
        var nInLen = sB64Enc.length;
        var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
        var taBytes = new Uint8Array(nOutLen);
        
        for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
            nMod4 = nInIdx & 3;
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
            if (nMod4 === 3 || nInLen - nInIdx === 1) {
                for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                    taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                }
                nUint24 = 0;
            }
        }
        return taBytes.buffer;
    }
}

// WebAssembly instance
faust.Pulsaxophone_instance = null;

// Monophonic Faust DSP
class PulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            PulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            PulsaxophoneProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        PulsaxophoneProcessor.parse_ui(JSON.parse(getJSONPulsaxophone()).ui, params, PulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONPulsaxophone());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.Pulsaxophone_instance.exports;
        this.HEAP = faust.Pulsaxophone_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);
        
        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);
        
        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];
        
        // input items
        this.inputs_items = [];
        
        // Start of HEAP index
        
        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        // TODO: send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            PulsaxophoneProcessor.parse_ui(this.json_object.ui, this, PulsaxophoneProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, faust.buffer_size, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
try {
	registerProcessor('Pulsaxophone', PulsaxophoneProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodePulsaxophone()), faust.importObject)
            .then(dsp_module => {
                  faust.Pulsaxophone_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('Pulsaxophone', PulsaxophoneProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Pulsaxophone cannot be loaded or compiled"); });
