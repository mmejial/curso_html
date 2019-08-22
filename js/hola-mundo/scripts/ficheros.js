'use strict'
//alerta
alert("hola");

//confimaacion
var confirmar = confirm("estas seguro de ser un gordito");
console.log(confirmar);

if (confirmar == true) {
    console.log("taquitos de pollo");
} else {
    console.log("no taquito");
}

//ingreso datos
var no = prompt("que edad tienes", 18);
console.log(typeof no);