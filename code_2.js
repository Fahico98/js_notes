
var scope = "global";

f();

function f() {
   console.log(scope);     // Prints "undefined", not "global"
   var scope = "local";    // Variable initialized here, but defined everywhere
   console.log(scope);     // Prints "local"
}

/**
 * 3.10.1 Function Scope and Hoisting.
 * 
 * You might think that the first line of the function would print “global”, because the 'var' statement
 * declaring the local variable has not yet been executed. Because of the rules of function scope,
 * however, this is not what happens. The local variable is defined throughout the body of the function,
 * which means the global variable by the same name is hidden throughout the function. Although the local
 * variable is defined throughout, it is not actually initialized until the var statement is executed.
 * Thus, the function above is equivalent to the following, in which the variable declaration is
 * “hoisted” to the top and the variable initialization is left where it is:
 */

f();

function f() {
   var scope;              // Local variable is declared at the top of the function
   console.log(scope);     // It exists here, but still has "undefined" value
   scope = "local";        // Now we initialize it and give it a value
   console.log(scope);     // And here it has the value we expect
}

/**
 * 3.7. Immutable Primitive Values and Mutable Object References.
 * 
 * Objects are sometimes called reference types to distinguish them from JavaScript’s
 * primitive types. Using this terminology, object values are references, and we say that 
 * objects are compared by reference: two object values are the same if and only if they
 * refer to the same underlying object.
 */

/**
 * 3.8. Type Conversions.
 * 
 * JavaScript is very flexible about the types of values it requires. We’ve seen this for
 * booleans: when JavaScript expects a boolean value, you may supply a value of any type,
 * and JavaScript will convert it as needed. Some values (“truthy” values) convert to
 * true and others (“falsy” values) convert to false. The same is true for other types: if
 * JavaScript wants a string, it will convert whatever value you give it to a string. If
 * Java-Script wants a number, it will try to convert the value you give it to a number (or to
 * NaN if it cannot perform a meaningful conversion). Some examples:
 */

10 + " objects";      // => "10 objects". Number 10 converts to a string.
"7" * "4";            // => 28: both strings convert to numbers.
var n = 1 - "x";      // => NaN: string "x" can't convert to a number.
n + " objects";       // => "NaN objects": NaN converts to string "NaN".

// Table 3-2. JavaScript type conversions.

/**
 * 3.8.2 Explicit Conversions.
 * 
 * Although JavaScript performs many type conversions automatically, you may sometimes
 * need to perform an explicit conversion, or you may prefer to make the conversions
 * explicit to keep your code clearer. The simplest way to perform an explicit type
 * conversion is to use the Boolean(), Number(), String(), or Object() functions. We’ve
 * already seen these functions as constructors for wrapper objects. When invoked
 * without the new operator, however, they work as conversion functions and perform the
 * conversions summarized in Table 3-2:
 */

Number("3");       // => 3
String(false);     // => "false" Or use false.toString()
Boolean([]);       // => true
Object(3);         // => new Number(3)

/**
 * Certain JavaScript operators perform implicit type conversions, and are sometimes
 * used for the purposes of type conversion. If one operand of the + operator is a string,
 * it converts the other one to a string. The unary + operator converts its operand to a
 * number. And the unary ! operator converts its operand to a boolean and negates it. These
 * facts lead to the following type conversion idioms that you may see in some code:
 */

var x = 3;
console.log("type of typeof(x + \"\"): " + typeof(x + ""));       // Same as String(x)
console.log("typeof(x - 0): " + typeof(x - 0));                   // Same as Number(x). You may also see x-0
console.log("typeof(!!x): " + typeof(!!x));                       // Same as Boolean(x). Note double !

