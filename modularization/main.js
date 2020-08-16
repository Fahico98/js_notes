
// La clase y las funciones se deben importar por separado y se puede cambiar el nombre de
// las funciones o las variables utilizando la palabra clave "as".

import { printAge, printName as myPrintNameFunc, severalArgsFunctino as argsFunc, methods } from "./User";
import User from "./User";

var user = new User("Fahico", 28);

console.log(user);

myPrintNameFunc(user);
printAge(user);

var args = [100, 176, 230, 290, 335, 812];

argsFunc(...args);

methods.printHello();
methods.printHowAreYou();
methods.printGoogBye();
