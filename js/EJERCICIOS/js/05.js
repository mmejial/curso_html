'use strict'

var a = Number(prompt("introduce un numero"));
/* var b = Number(pormpt("introduce un numero")); */



for (var i = 1; i <= a; i++) {
    if (a % i == 0)
        console.log(i);
}