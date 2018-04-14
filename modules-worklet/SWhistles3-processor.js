
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"filename\":\"SWhistles3\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SWhistles3\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"116\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"48\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"268\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"65888\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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bHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IldoaXN0bGVzIDMifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2hpc3RsZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1doaXN0bGVzL09OL09GRl8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEyIDAgMiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9GcmVxdWVuY3kiLCJpbmRleCI6IjExNiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiODIwIiwibWluIjoiNjYwIiwibWF4IjoiMTEwMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDAiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8wIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8xIiwiaW5kZXgiOiIyNjgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMiIsImluZGV4IjoiNjU4ODgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles3Processor.parse_items(group.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
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
    
    static atob(sBase64, nBlocksSize)
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
                nUint24 |= SWhistles3Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SWhistles3Processor.parse_ui(JSON.parse(getJSONSWhistles3()).ui, params, SWhistles3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles3());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.SWhistles3_instance = new WebAssembly.Instance(SWhistles3Processor.wasm_module, SWhistles3Processor.importObject);
  	   	this.factory = this.SWhistles3_instance.exports;
        this.HEAP = this.SWhistles3_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles3Processor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles3Processor.parse_ui(this.json_object.ui, this, SWhistles3Processor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SWhistles3Processor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, SWhistles3Processor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SWhistles3Processor.buffer_size = 128;

SWhistles3Processor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (SWhistles3Processor.wasm_module == undefined) {
        SWhistles3Processor.wasm_module = new WebAssembly.Module(SWhistles3Processor.atob(getBase64CodeSWhistles3()));
        registerProcessor('SWhistles3', SWhistles3Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SWhistles3 cannot be loaded or compiled");
}

