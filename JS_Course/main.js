
// Video 6 ________________________________________________________________________________________________________
// Template Strings.

console.log("\nTemplate Strings...");

let firstName = "Fahibram";
let lastName = "Carcamo";

let completeName = `El nombre es: ${firstName}.\nEl apellido es: ${lastName}.`;

console.log(completeName);

// Video 10 ________________________________________________________________________________________________________
// Functions.

console.log("\nFunctions...");

myFunc();

// Función declarado: Esta función puede ser invocada antes y despues de su declaración.
function myFunc(){
   console.log("From myFunc...!");
}

myFunc();

// myOtherFunc(); // Uncaught ReferenceError: myOtherFunc is not defined.

// Función expresada: Esta función solo puede ser invocada despues de su declaración.
const myOtherFunc = function(){
   console.log("From myOtherFunct...!");
}

myOtherFunc();

// Video 11 ________________________________________________________________________________________________________
// Arrays.

console.log("\nArrays...");

// Declaraciones.

let array_a = Array.of("Cero", "Uno", "Dos", 3, 4, 5);
console.log(array_a);

let array_b = Array(10).fill("Str");
console.log(array_b);

let array_c = Array.of("Red", "Green", "Blue", "Yellow", "Black");
console.log(array_c);

// Métodos.

array_c.push("White");
console.log(array_c);

array_c.pop();
console.log(array_c);

array_c.unshift("Orange");
console.log(array_c);

array_c.forEach((color) => {
   console.log(`My favorite color is: ${color}`);
});

let itHasBlack = array_c.some((color) => {
   return color == "Black"
});
console.log(`itHasBlack: ${itHasBlack}`);

let everyIsRed = array_c.every((color) => {
   return color == "Red";
});
console.log(`everyIsRed: ${everyIsRed}`);

// Video 12 ________________________________________________________________________________________________________
// Objects.

console.log("\nObjects...");

const person = {
   name: "Nicole",
   lastname: "Aniston",
   age: 32,
   hobbies: [
      "sex",
      "sport",
      "cook",
      "train"
   ],
   doIntroduction(){
      console.log(
         "Hi... Mi name is: " + this.name + " " + this.lastname + ".\n" +
         "I'm " + this.age + "old.\n" +
         "I like to " + this.hobbies + "."
      );
   }
};

person.doIntroduction();

console.log(Object.keys(person));
console.log(Object.values(person));

console.log("person.hasOwnProperty('hobbies'): " + person.hasOwnProperty("hobbies"));

// Video 18 ________________________________________________________________________________________________________
// Destructuring.

console.log("\nDestructuring...");

let a, b, rest;
[a, b] = [10, 20];

console.log(a); // expected output: 10
console.log(b); // expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // expected output: [30, 40, 50]

// Video 19 ________________________________________________________________________________________________________
// Literal objects.

console.log("\nLiteral objects...");

let name = "Evan";
let age = 31;

const otherPerson = {
   name,
   age,
   occupation: "Web developer"
};

// Video 20 ________________________________________________________________________________________________________
// REST Parameters and spread operator.

console.log("\nREST Parameters and spread operator...");

function sum(a, b, ...c){ // c es un REST Parameter.
   let result = a + b;
   c.forEach(n => result += n);
   return result;
}

console.log(sum(3, 10));
console.log(sum(2, 9, 4, 12));
console.log(sum(3, 11, 25, 28, 100, 74));

let array_1 = [3, 20, 18, 35, 6, 9, 21];
let array_2 = [31, 26, 14, 16, 2, 31, 1];
let array_3 = [...array_1, ...array_2];

console.log(array_3);

