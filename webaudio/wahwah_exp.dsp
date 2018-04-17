declare compilation_options    "-single -scal";
declare effect_lib_author "Julius O. Smith (jos at ccrma.stanford.edu)";
declare effect_lib_copyright "Julius O. Smith III";
declare effect_lib_exciter_author "Priyanka Shekar (pshekar@ccrma.stanford.edu)";
declare effect_lib_exciter_copyright "Copyright (c) 2013 Priyanka Shekar";
declare effect_lib_exciter_license "MIT License (MIT)";
declare effect_lib_exciter_name "Harmonic Exciter";
declare effect_lib_exciter_version "1.0";
declare effect_lib_license "STK-4.3";
declare effect_lib_name "Faust Audio Effect Library";
declare effect_lib_version "1.33";
declare filter_lib_author "Julius O. Smith (jos at ccrma.stanford.edu)";
declare filter_lib_copyright "Julius O. Smith III";
declare filter_lib_license "STK-4.3";
declare filter_lib_name "Faust Filter Library";
declare filter_lib_reference "https://ccrma.stanford.edu/~jos/filters/";
declare filter_lib_version "1.29";
declare math_lib_author "GRAME";
declare math_lib_copyright "GRAME";
declare math_lib_license "LGPL with exception";
declare math_lib_name "Math Library";
declare math_lib_version "1.0";
declare music_lib_author "GRAME";
declare music_lib_copyright "GRAME";
declare music_lib_license "LGPL with exception";
declare music_lib_name "Music Library";
declare music_lib_version "1.0";
process = hgroup("wahwah", _,_<:(_,(1,vslider("dry-wet[style:knob]", 0.3f, 0.0f, 1.0f, 0.01f) : -) : *),(_,(1,vslider("dry-wet[style:knob]", 0.3f, 0.0f, 1.0f, 0.01f) : -) : *),((_,(0.1f,(4.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x20).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x20,(x20 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x20,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x20,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : pow) : * : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : * : \(x21).(\(x22).(x22,x21 : -))~(_<:(_,(0,((2.0f,(1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x23).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x23,(x23 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x23,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x23,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x23).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x23,(x23 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x23,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x23,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -) : *),((2,3.141592653589793f : *),((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x23).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x23,(x23 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x23,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x23,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : * : cos) : *) : - : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,1 : @ : _,((1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x24).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x24,(x24 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x24,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x24,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x24).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x24,(x24 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x24,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x24,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -),(1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x24).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x24,(x24 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x24,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x24,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x24).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x24,(x24 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x24,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x24,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -) : * : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *):>_) : _<:(_,1 : *),(_,1 : @ : _,-1 : *),(_,(1,1 : +) : @ : _,0 : *):>_),(_,(0.1f,(4.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x20).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x20,(x20 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x20,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x20,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : pow) : * : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : * : \(x25).(\(x26).(x26,x25 : -))~(_<:(_,(0,((2.0f,(1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x27).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x27,(x27 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x27,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x27,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x27).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x27,(x27 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x27,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x27,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -) : *),((2,3.141592653589793f : *),((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x27).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x27,(x27 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x27,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x27,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : * : cos) : *) : - : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,1 : @ : _,((1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x28).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x28,(x28 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x28,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x28,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x28).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x28,(x28 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x28,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x28,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -),(1,((3.141592653589793f,((4.5e+02f,(2.0f,(2.3f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x28).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x28,(x28 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x28,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x28,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : *) : pow) : *),(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : /) : *),(2.0f,((2.0f,(1.0f,(vslider("wah[style:knob]", 0.8f, 0.0f, 1.0f, 0.01f) : \(x28).((10,1 : +),0.0f,((((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int),((x28,(x28 : mem) : - : abs : (+ : ((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : mem),_,0 : select2)~_ : _,0 : >),(x28,0.0f : <=) : |) : &),10,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : select2),x28,((_,((60,(192000,(1,fconstant(int fSamplingFreq, <math.h>) : max) : min) : *),360 : / : int) : %)~(_,1 : +),0 : == : int : (+ : _,10 : %)~_) : rwtable)) : -) : *),1.0f : +) : pow) : /) : -) : * : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *):>_) : _<:(_,1 : *),(_,1 : @ : _,-1 : *),(_,(1,1 : +) : @ : _,0 : *):>_) : (_,vslider("dry-wet[style:knob]", 0.3f, 0.0f, 1.0f, 0.01f) : *),(_,vslider("dry-wet[style:knob]", 0.3f, 0.0f, 1.0f, 0.01f) : *)):>_,_);