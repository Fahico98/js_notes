
/**
 * 9.2 Classes and Constructors.
 * 
 * A constructor is a function designed for the initialization of newly created objects. Constructors
 * are invoked using the new keyword as described in 8.2.3. Constructor invocations using new
 * automatically create the new object, so the constructor itself only needs to initialize the state
 * of that new object. The critical feature of constructor invocations is that the prototype property
 * of the constructor is used as the prototype of the new object. This means that all objects created
 * with the same constructor inherit from the same object and are therefore members of the same class.
 */

// Example 9-2. A Range class using a constructor.

// range2.js: Another class representing a range of values.
// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to){
   // Store the start and end points (state) of this new range object.
   // These are noninherited properties that are unique to this object.
   this.from = from;
   this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
   // Return true if x is in the range, false otherwise
   // This method works for textual and Date ranges as well as numeric.
   includes: function(x){
      return this.from <= x && x <= this.to;
   },
   // Invoke f once for each integer in the range.
   // This method works only for numeric ranges.
   foreach: function(f){
      for(var x = Math.ceil(this.from); x <= this.to; x++){
         f("-> " + x);
      }
   },
   // Return a string representation of the range
   toString: function(){
      return("(" + this.from + "..." + this.to + ")");
   }
};

// Here are example uses of a range object
var r = new Range(1,3); // Create a range object
r.includes(2); // => true: 2 is in the range
r.foreach(console.log); // Prints 1 2 3
console.log(r); // Prints (1...3)
