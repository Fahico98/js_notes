
/**
 * 6.7 Property Attributes.
 * 
 * In addition to a name and value, properties have attributes that specify whether they can be
 * written, enumerated, and configured. In ECMAScript 3, there is no way to set these attributes:
 * all properties created by ECMAScript 3 programs are writable, enumerable, and configurable,
 * and there is no way to change this. This section explains the ECMAScript 5 API for querying
 * and setting property attributes.
 * 
 * For the purposes of this section, we are going to consider getter and setter methods of an
 * accessor property to be property attributes. Following this logic, we’ll even say that the
 * value of a data property is an attribute as well. Thus, we can say that a property has a name
 * and four attributes. The four attributes of a data property are value, writable, enumerable,
 * and configurable. Accessor properties don’t have a value attribute or a writable attribute:
 * their writability is determined by the presence or absence of a setter. So the four attributes
 * of an accessor property are get, set, enumerable, and configurable.
 * 
 * The ECMAScript 5 methods for querying and setting the attributes of a property use an object
 * called a property descriptor to represent the set of four attributes. A property descriptor
 * object has properties with the same names as the attributes of the property it describes.
 * Thus, the property descriptor object of a data property has properties named value, writable,
 * enumerable, and configurable. And the descriptor for an accessor property has get and set
 * properties instead of value and writable. The writable, enumerable, and configurable
 * properties are boolean values, and the get and set properties are function values, of course.
 * 
 * To obtain the property descriptor for a named property of a specified object, call
 * Object.getOwnPropertyDescriptor():
 */

// Returns {value: 1, writable:true, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor({x:1}, "x"));

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
   get octet(){
      return Math.floor(Math.random() * 256);
   },
   get uint16(){
      return Math.floor(Math.random() * 65536);
   },
   get int16(){
      return Math.floor(Math.random() * 65536) - 32768;
   }
};

// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

// Returns undefined for inherited properties and properties that don't exist.
console.log(Object.getOwnPropertyDescriptor({}, "x")); // undefined, no such prop
console.log(Object.getOwnPropertyDescriptor({}, "toString")); // undefined, inherited

/**
 * As its name implies, Object.getOwnPropertyDescriptor() works only for own properties. To query
 * the attributes of inherited properties, you must explicitly traverse the prototype chain
 * (see Object.getPrototypeOf() in 6.8.1).
 * 
 * To set the attributes of a property, or to create a new property with the specified attributes, call
 * Object.defineProperty(), passing the object to be modified, the name of the property to be created
 * or altered, and the property descriptor object:
 */

var o = {}; // Start with no properties at all.

 // Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", {
   value : 1,
   writable: true,
   enumerable: false,
   configurable: true
});

// Check that the property is there but is nonenumerable.
o.x; // => 1
Object.keys(o); // => []

// Now modify the property x so that it is read-only.
Object.defineProperty(o, "x", {writable: false});

// Try to change the value of the property.
o.x = 2; // Fails silently or throws TypeError in strict mode.
console.log(o.x); // => 1

// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", {value: 2});
console.log(o.x); // => 2

// Now change x from a data property to an accessor property.
Object.defineProperty(o, "x", {
   get: function(){
      return 0;
   }
});
console.log(o.x); // => 0

/**
 * We saw the ECMAScript 5 method Object.create() in 6.1. We learned there that the first argument to
 * that method is the prototype object for the newly created object. This method also accepts a second
 * optional argument, which is the same as the second argument to Object.defineProperties(). If you
 * pass a set of property descriptors to Object.create(), then they are used to add properties to the
 * newly created object.
 * 
 * Object.defineProperty() and Object.defineProperties() throw TypeError if the attempt to create or
 * modify a property is not allowed. This happens if you attempt to add a new property to a
 * nonextensible (see 6.8.3) object. The other reasons that these methods might throw TypeError have
 * to do with the attributes themselves. The writable attribute governs attempts to change the value
 * attribute. And the configurable attribute governs attempts to change the other attributes (and also
 * specifies whether a property can be deleted).
 */