
const items = [
   { name: "Bike",       price: 100    },
   { name: "TV",         price: 200    },
   { name: "Album",      price: 10     },
   { name: "Book",       price: 5      },
   { name: "Phone",      price: 500    },
   { name: "Computer",   price: 1000   },
   { name: "Keyboard",   price: 25     }
];
console.log(items);


const filteredItems = items.filter(function(item){
   return item.price <= 100;
});
console.log(filteredItems);


const itemsNames = items.map(function(item){
   return item.name;
});
console.log(itemsNames);


const foundItem = items.find(function(item){
   return item.name === "Phone";
});
console.log(foundItem);


const hasExpensiveItems = items.some(function(item){
   return item.price >= 1000;
});
console.log(hasExpensiveItems);


const everyExpensiveItems = items.every(function(item){
   return item.price >= 1000;
});
console.log(everyExpensiveItems);


const total = items.reduce(function(currentTotal, item){
   console.log("Current total: " + (item.price + currentTotal) + ".\n");
   return item.price + currentTotal;
}, 0);
console.log(total);


const numbers = [10, 21, 46, 50, 79, 100];
const included = numbers.includes(80);
console.log(included);


items.forEach(function(item){
   console.log("Name: " + item.name + "   -   Price: " + item.price + ".\n");
});


/**
 * JavaScript | Array sort()
 * 
 * The only argument to this function is a compare function that is used to sort the elements according
 * to different attributes and in the different order.
 * 
 * compareFunction(a, b) < 0.
 * Then a comes before b in the answer.
 * 
 * compareFunction(a, b) > 0.
 * Then b comes before a in the answer.
 * 
 * compareFunction(a, b) = 0.
 * Then the order of a and b remains unchanged.
 * 
 * Return value: This function returns the reference of the sorted original array.
 */

// Example 1:
var arr = [2, 5, 8, 1, 4];
arr.sort();
console.log(arr);

// Example 2:
var arr = [2, 5, 8, 1, 4];
arr.sort(function(a, b){
   return a + 2 * b;
});
console.log(arr);

// Example 3:
var arr = [9, 5, 18, 21, 4];
arr.sort(function(a, b){
   return a - 2 * b;
});
console.log(arr);

/**
 * Getters and Setters.
 */

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