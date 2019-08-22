'use strict'

var a = Number(prompt("introduce un numero", 0));

while (isNaN(a) || a == 0) {
    a = Number(prompt("introduce un numero", 0));
}
if (a % 2 == 0) {
    console.log("es un numero par");


} else {
    console.log("es un numero in par");
}