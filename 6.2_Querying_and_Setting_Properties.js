
/**
 * 6.2 Querying and Setting Properties.
 * 
 * To obtain the value of a property, use the dot (.) or square bracket ([]) operators described in
 * 4.4. The left-hand side should be an expression whose value is an object. If using the dot
 * operator, the right-hand must be a simple identifier that names the property. If using square
 * brackets, the value within the brackets must be an expression that evaluates to a string that
 * contains the desired property name:
 */

var author = book.author; // Get the "author" property of the book.
var name = author.surname; // Get the "surname" property of the author.
var title = book["main title"]; // Get the "main title" property of the book.

/**
 * 6.2.2 Inheritance.
 * 
 * JavaScript objects have a set of “own properties,” and they also inherit a set of properties from
 * their prototype object. To understand this, we must consider property access in more detail. The
 * examples in this section use the inherit() function from Example 6-1 in order to create objects
 * with specified prototypes.
 * 
 * Suppose you query the property x in the object o. If o does not have an
 * own property with that name, the prototype object of o is queried for the property x. If the
 * prototype object does not have an own property by that name, but has a prototype itself, the query
 * is performed on the prototype of the prototype. This continues until the property x is found or
 * until an object with a null prototype is searched. As you can see, the prototype attribute of an
 * object creates a chain or linked list from which properties are inherited.
 */

var o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
var q = inherit(p); // q inherits properties from p, o, and Object.prototype
q.z = 3; // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y; // => 3: x and y are inherited from o and p

