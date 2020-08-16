
export default class User{
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
}

export function printName(user){
   console.log(`User's name: ${user.name}.`);
}

export function printAge(user){
   console.log(`User's age: ${user.age}.`);
}

export function severalArgsFunctino(a, b, c, d, e, f){
   console.log(`>>> ${a} >>> ${b} >>> ${c} >>> ${d} >>> ${e} >>> ${f}.`);
}

export var methods = {

   printHello(){
      console.log("Hello...!");
   },

   printHowAreYou(){
      console.log("How are you ?");
   },

   printGoogBye(){
      console.log("Good bye...!");
   }
}

// De esta forma: primero se definen las funciones y la clase y luego se exportan.
// Es mejor exportar todo al tiempo que se define...

// export default User;
// export { printName, printAge };
