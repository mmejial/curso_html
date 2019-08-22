'use strict'
var a = 0;
var b = 0;

a = parseInt(prompt("escribe 1 numero"));
b = parseInt(prompt("escribe otro numero"));
while (a <= 0 || b <= 0 || isNaN(a) || isNaN(b)) {
    a = parseInt(prompt("escribe 1 numero"));
    b = parseInt(prompt("escribe otro numero"));
}

if (a > b && b < a) {
    console.log("el numero mayo es: " + a);

} else if (a < b && b > a) {
    console.log("el mayor es: " + b);
} else {
    console.log("son iguales");
}