//-------------------------------------------------------//
                    /* FUNCIONES */
//-------------------------------------------------------//

/* Funciones */

// Crear.
function saludar(){

   respuesta = prompt("Hola Amigo! ¿Como estuvo tu dia?");
   if (respuesta == "bien"){
       alert("me alegro");
   } else {
       alert("que pena");
   }

}

saludar();


// Crear funcion dentro de variable.
saludar = function(){

    respuesta = prompt("Hola Amigo! ¿Como estuvo tu dia?");
    if (respuesta == "bien"){
        alert("me alegro");
    } else {
        alert("que pena");
    }

}

saludar();


// return

function saludar(){
    alert("hola");
    return "hola soy el retorno de la funcion"
}

let saludo = saludar();

document.write(saludo);

// Pasar los parametros a una funcion
function suma(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(5,2);


function suma(num1,num2){
    let res = num1 + num2;
    return res
}
// resultado es el retorno de la funcion
let resultado = suma(5,5);

document.write(resultado);


function saludar(nombre){
    let frase = `¡hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("Khloe");


// Funcion Flecha
// reemplaza la palabra reservada de fucntion por ()=>
// con function
const saludar = function(nombre){
    let frase = `¡hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("Khloe");


// con flecha
// no se porque no me toma frase defenida fuera de la funcion
let frase = `¡hola ${nombre}! ¿como estas?`;
const saludar = nombre => document.write(frase);
saludar("Khloe");


const saludar = (nombre)=>{
    let frase = `¡hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("lean");

