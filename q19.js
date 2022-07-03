// What’s the difference between ES6 Map and WeakMap?

// They both behave differently when a object referenced by their keys/values gets deleted. Lets take the below example code:

var map = new Map();
var weakmap = new WeakMap();

(function() {
    var a = {
        x: 12
    };
    var b = {
        y: 12
    };

    map.set(a, 1);
    weakmap.set(b, 2);
})()

// The above IIFE is executed there is no way we can reference {x: 12} and {y: 12} anymore. Garbage collector goes ahead and deletes the key b pointer from “WeakMap” and also removes {y: 12} from memory. But in case of “Map”, the garbage collector doesn’t remove a pointer from “Map” and also doesn’t remove {x: 12} from memory.

// WeakMap allows garbage collector to do its task but not Map. With manually written maps, the array of keys would keep references to key objects, preventing them from being garbage collected. In native WeakMaps, references to key objects are held “weakly“, which means that they do not prevent garbage collection in case there would be no other reference to the object.