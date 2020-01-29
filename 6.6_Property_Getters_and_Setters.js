
/**
 * Getters and Setters.
 * 
 * We’ve said that an object property is a name, a value, and a set of attributes. In ECMAScript 5
 * the value may be replaced by one or two methods, known as a getter and a setter. Properties defined
 * by getters and setters are sometimes known as accessor properties to distinguish them from data
 * properties that have a simple value.
 * 
 * When a program queries the value of an accessor property, JavaScript invokes the getter method
 * (passing no arguments). The return value of this method becomes the value of the property access
 * expression. When a program sets the value of an accessor property, JavaScript invokes the setter
 * method, passing the value of the right-hand side of the assignment. This method is responsible for
 * “setting” in some sense, the property value. The return value of the setter method is ignored.
 * 
 * Accessor properties do not have a 'writable' attribute as data properties do. If a property has
 * both a getter and a setter method, it is a read/write property. If it has only a getter method,
 * it is a read-only property. And if it has only a setter method, it is a write-only property
 * (something that is not possible with data properties) and attempts to read it always evaluate to
 * 'undefined'.
 * 
 * The easiest way to define accessor properties is with an extension to the object literal syntax:
 */

var o = {
   // An ordinary data property
   data_prop: value,
   // An accessor property defined as a pair of functions
   get accessor_prop() { /* function body here */ },
   set accessor_prop(value) { /* function body here */ }
};

// Other example...

const person = {
   firstName: "Fabian",
   lastName: "Carcamo",
   get fullName(){
      return this.firstName + " " + this.lastName;
   },
   set fullName(name){
      const array = name.split(" ");
      this.firstName = array[0];
      this.lastName = array[1];
   }
}

person.fullName = "Max Power";

console.log(person.fullName);

