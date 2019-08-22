'use strict'

var a = Number(prompt("introduce un muero"));
var b = Number(prompt("introduce otro numero"));

while (a < b) {
    for (var i = a; i <= b; i++) {

        if (i % 2 == 0)
            console.log(i);

    }
    break;
}