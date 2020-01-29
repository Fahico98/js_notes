
/**
 * 7.8 Array Methods.
 * 
 * 7.8.1 join().
 * 
 * The Array.join() method converts all the elements of an array to strings and concatenates them,
 * returning the resulting string. You can specify an optional string that separates the elements
 * in the resulting string. If no separator string is specified, a comma is used. For example, the
 * following lines of code produce the string “1,2,3”:
 */

var a = [1, 2, 3]; // Create a new array with these three elements.
a.join(); // => "1,2,3".
a.join(" "); // => "1 2 3".
a.join(""); // => "123".
var b = new Array(10); // An array of length 10 with no elements.
b.join('-') // => '---------': a string of 9 hyphens.

/**
 * 7.8.2 reverse().
 * 
 * The Array.reverse() method reverses the order of the elements of an array and returns the reversed
 * array. It does this in place; in other words, it doesn’t create a new array with the elements
 * rearranged but instead rearranges them in the already existing array. For example, the following
 * code, which uses the reverse() and join() methods, produces the string “3,2,1”:
 */

var a = [1,2,3];
a.reverse().join() // => "3,2,1" and a is now [3,2,1].

/**
 * 7.8.3 sort().
 * 
 * Array.sort() sorts the elements of an array in place and returns the sorted array. When sort() is
 * called with no arguments, it sorts the array elements in alphabetical order (temporarily converting
 * them to strings to perform the comparison, if necessary):
 */

var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry".

/**
 * 7.8.4 concat().
 * 
 * The Array.concat() method creates and returns a new array that contains the elements of the original
 * array on which concat() was invoked, followed by each of the arguments to concat(). If any of these
 * arguments is itself an array, then it is the array elements that are concatenated, not the array
 * itself. Note, however, that concat() does not recursively flatten arrays of arrays. concat() does not
 * modify the array on which it is invoked. Here are some examples:
 */

var a = [1,2,3];
a.concat(4, 5) // Returns [1,2,3,4,5].
a.concat([4,5]); // Returns [1,2,3,4,5].
a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7].
a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]].

/**
 * 7.8.5 slice().
 * 
 * The Array.slice() method returns a slice, or subarray, of the specified array. Its two arguments specify
 * the start and end of the slice to be returned. The returned array contains the element specified by the
 * first argument and all subsequent elements up to, but not including, the element specified by the second
 * argument. If only one argument is specified, the returned array contains all elements from the start
 * position to the end of the array. If either argument is negative, it specifies an array element relative
 * to the last element in the array. An argument of -1, for example, specifies the last element in the array,
 * and an argument of -3 specifies the third from last element of the array. Note that slice() does not
 * modify the array on which it is invoked. Here are some examples:
 */

var a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3].
a.slice(3); // Returns [4,5].
a.slice(1,-1); // Returns [2,3,4].
a.slice(-3,-2); // Returns [3].

/**
 * 7.8.6 splice().
 * 
 * The Array.splice() method is a general-purpose method for inserting or removing elements from an array.
 * Unlike slice() and concat(), splice() modifies the array on which it is invoked. Note that splice() and
 * slice() have very similar names but perform substantially different operations.
 * 
 * splice() can delete elements from an array, insert new elements into an array, or perform both operations
 * at the same time. Elements of the array that come after the insertion or deletion point have their indexes
 * increased or decreased as necessary so that they remain contiguous with the rest of the array. The first
 * argument to splice() specifies the array position at which the insertion and/or deletion is to begin. The
 * second argument specifies the number of elements that should be deleted from (spliced out of) the array.
 * If this second argument is omitted, all array elements from the start element to the end of the array are
 * removed. splice() returns an array of the deleted elements, or an empty array if no elements were deleted.
 * For example:
 */

var a = [1,2,3,4,5,6,7,8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4].
a.splice(1,2); // Returns [2,3]; a is [1,4].
a.splice(1,1); // Returns [4]; a is [1].

/**
 * The first two arguments to splice() specify which array elements are to be deleted. These arguments may
 * be followed by any number of additional arguments that specify elements to be inserted into the array,
 * starting at the position specified by the first argument. For example:
 */

var a = [1,2,3,4,5];
a.splice(2,0,'a','b'); // Returns []; a is [1,2,'a','b',3,4,5].
a.splice(2,2,[1,2],3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5].

/**
 * Note that, unlike concat(), splice() inserts arrays themselves, not the elements of those arrays.
 * 
 * 
 * 7.8.7 push() and pop().
 * 
 * The push() and pop() methods allow you to work with arrays as if they were stacks. The push() method
 * appends one or more new elements to the end of an array and returns the new length of the array. The
 * pop() method does the reverse: it deletes the last element of an array, decrements the array length,
 * and returns the value that it removed. Note that both methods modify the array in place rather than
 * produce a modified copy of the array. The combination of push() and pop() allows you to use a
 * JavaScript array to implement a first-in, last-out stack. For example:
 */

var stack = []; // stack: [].
stack.push(1,2); // stack: [1,2] Returns 2.
stack.pop(); // stack: [1] Returns 2.
stack.push(3); // stack: [1,3] Returns 2.
stack.pop(); // stack: [1] Returns 3.
stack.push([4,5]); // stack: [1,[4,5]] Returns 2.
stack.pop() // stack: [1] Returns [4,5].
stack.pop(); // stack: [] Returns 1.

/**
 * 7.8.8 unshift() and shift().
 * 
 * The unshift() and shift() methods behave much like push() and pop(), except that they insert and
 * remove elements from the beginning of an array rather than from the end. unshift() adds an element
 * or elements to the beginning of the array, shifts the existing array elements up to higher indexes
 * to make room, and returns the new length of the array. shift() removes and returns the first element
 * of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the
 * start of the array. For example:
 */

var a = []; // a:[].
a.unshift(1); // a:[1] Returns: 1.
a.unshift(22); // a:[22,1] Returns: 2.
a.shift(); // a:[1] Returns: 22.
a.unshift(3,[4,5]); // a:[3,[4,5],1] Returns: 3.
a.shift(); // a:[[4,5],1] Returns: 3.
a.shift(); // a:[1] Returns: [4,5].
a.shift(); // a:[] Returns: 1.

/**
 * Note the possibly surprising behavior of unshift() when it’s invoked with multiple arguments. Instead
 * of being inserted into the array one at a time, arguments are inserted all at once (as with the splice()
 * method). This means that they appear in the resulting array in the same order in which they appeared in
 * the argument list. Had the elements been inserted one at a time, their order would have been reversed.
 */

