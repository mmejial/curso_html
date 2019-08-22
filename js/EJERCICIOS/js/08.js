'use strict'

var a = parseInt(prompt("introduce un numero"));
var b = parseInt(prompt("introduce otro numero"));

while (isNaN(a) && isNaN(b)) {
    var a = parseInt(prompt("introduce un numero"));
    var b = parseInt(prompt("introduce otro numero"));

}
var ope = parseInt(prompt("introduce una opcion"));
switch (ope) {
    case 1:
        console.log(a + b);
        break;


    case 2:
        console.log(a - b);
        break;


    case 3:
        console.log(a * b);
        break;


    case 4:
        console.log(a / b);
        break;


    case 5:
        break;
}