
/**
 * 6.1 Creating Objects.
 * 
 * Objects can be created with object literals, with the new keyword, and (in ECMAScript 5)
 * with the Object.create() function. The subsections below describe each technique.
 */

/**
 * 6.1.1 Object Literals.
 * 
 * The easiest way to create an object is to include an object literal in your JavaScript code.
 * An object literal is a comma-separated list of colon-separated name:value pairs, enclosed
 * within curly braces. A property name is a JavaScript identifier or a string literal
 * (the empty string is allowed). A property value is any JavaScript expression; the value of
 * the expression (it may be a primitive value or an object value) becomes the value of the
 * property. Here are some examples:
 */

var empty = {}; // An object with no properties
var point = {x: 0, y: 0}; // Two properties
var point2 = {x: point.x, y: point.y + 1}; // More complex values
var book = {
   "main title": "JavaScript", // Property names include spaces,
   'sub-title': "The Definitive Guide", // and hyphens, so use string literals
   "for": "all audiences", // for is a reserved word, so quote
   author: { // The value of this property is
      firstname: "David", // itself an object. Note that
      surname: "Flanagan" // these property names are unquoted.
   }
};

/**
 * 6.1.2 Creating Objects with 'new'.
 * 
 * The 'new' operator creates and initializes a new object. The 'new' keyword must be followed
 * by a function invocation. A function used in this way is called a constructor and serves to 
 * initialize a newly created object. Core JavaScript includes built-in constructors for native
 * types. For example:
 */

var o = new Object(); // Create an empty object: same as {}.
var a = new Array(); // Create an empty array: same as [].
var d = new Date(); // Create a Date object representing the current time
var r = new RegExp("js"); // Create a RegExp object for pattern matching.

/**
 * 6.1.3 Prototypes.
 * 
 * Before we can cover the third object creation technique, we must pause for a moment to
 * explain prototypes. Every JavaScript object has a second JavaScript object (or null, but this
 * is rare) associated with it. This second object is known as a prototype, and the first object
 * inherits properties from the prototype.
 * 
 * All objects created by object literals have the same prototype object, and we can refer to
 * this prototype object in JavaScript code as Object.prototype. Objects created using the new
 * keyword and a constructor invocation use the value of the prototype property of the constructor
 * function as their prototype. So the object created by new Object() inherits from Object.prototype
 * just as the object created by {} does. Similarly, the object created by new Array() uses
 * Array.prototype as its prototype, and the object created by new Date() uses Date.prototype as its
 * prototype.
 * 
 * Object.prototype is one of the rare objects that has no prototype: it does not inherit any
 * properties. Other prototype objects are normal objects that do have a prototype. All of the
 * built-in constructors (and most user-defined constructors) have a prototype that inherits from
 * Object.prototype. For example, Date.prototype inherits properties from Object.prototype, so a Date
 * object created by new Date() inherits properties from both Date.prototype and Object.prototype.
 * This linked series of prototype objects is known as a prototype chain.
 */

/**
 * 6.1.4 Object.create().
 * 
 * ECMAScript 5 defines a method, Object.create(), that creates a new object, using its first
 * argument as the prototype of that object. Object.create() also takes an optional second argument
 * that describes the properties of the new object. This second argument is covered in 6.7.
 * 
 * Object.create() is a static function, not a method invoked on individual objects. To use it,
 * simply pass the desired prototype object:
 */

var o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.

/**
 * You can pass null to create a new object that does not have a prototype, but if you do this, the
 * newly created object will not inherit anything, not even basic methods like toString() (which
 * means it won’t work with the + operator either):
 */

 var o2 = Object.create(null); // o2 inherits no properties or methods.

/**
 * If you want to create an ordinary empty object (like the object returned by {} or new Object()),
 * pass Object.prototype:
 */

var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

/**
 * The ability to create a new object with an arbitrary prototype (put another way: the ability to
 * create an “heir” for any object) is a powerful one, and we can simulate it in ECMAScript 3 with
 * a function like the one in Example 6-1.1.
 */

//Example 6-1. Creating a new object that inherits from a prototype.

// inherit() returns a newly created object that inherits properties from the prototype object p.
// It uses the ECMAScript 5 function Object.create() if it is defined, and otherwise falls back to
// an older technique.

function inherit(p) {
   if(p == null){
      throw TypeError(); // p must be a non-null object.
   }
   if(Object.create){ // If Object.create() is defined...
      return Object.create(p); // then just use it.
   }
   var t = typeof(p); // Otherwise do some more type checking
   if(t !== "object" && t !== "function"){
      throw TypeError();
   }
   function f(){}; // Define a dummy constructor function.
   f.prototype = p; // Set its prototype property to p.
   return new f(); // Use f() to create an "heir" of p.
}

/**
 * The code in the inherit() function will make more sense after we’ve covered constructors in
 * Chapter 9. For now, please just accept that it returns a new object that inherits the properties
 * of the argument object. Note that inherit() is not a full replacement for Object.create(): it
 * does not allow the creation of objects with null prototypes, and it does not accept the optional
 * second argument that Object.create() does. Nevertheless, we’ll use inherit() in a number of
 * examples in this chapter and again in Chapter 9.
 */
