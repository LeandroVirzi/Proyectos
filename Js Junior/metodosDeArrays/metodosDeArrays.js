//-------------------------------------------------------//
                    /* METODOS DE ARRAYS */
//-------------------------------------------------------//

/* TRANSFORMADORES 

- pop() -
    Elimina el ultimo elemento de un array y lo devuelve.

- shift() -
    Elimina el primer elemento de un array y lo devuelve.

- push() -
    Agrega un elemento al array al final de la lista.

- reverse() -
    Invierte el orden de los elementos de un array.

- unishift() -
    Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array.

- sort() -
    Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

- splice() -
    Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

*/


/* ACCESORES

- join() -
    Une todos los elementos de una matriz (u objeto similar) en una cadena  y la devuelve.

- slice() -
    Devuelve una parete del array dentro de un nuevo array epezando por inicio hasta fin (fin no incluido).


*/


/* DE REPEICION

- filter() - 
    Crea un nuevo array con todos los elementos que cumplan la condicion.

- forEach() -
    Ejecuta la funcion indicada una vez por cada elemento del array.

*/



/* TRANSFORMADORES */

// pop()
//-------------------------------------------------------//
// Elimina el ultimo elemento de un array y lo devuelve.
/*
let nombres = ["leandro","khloe","aika"];

document.write(nombres + "<br>");

let resultado = nombres.pop();

document.write(resultado + "<br>");
// devuelce aika porque es la ultima posicion y ademas lo elimino del arreglo.

document.write(nombres);
// veo el arreglo y quedo leandro,khloe porque se elimino a aika

*/



// shift()
//-------------------------------------------------------//
// Elimina el primer elemento de un array y lo devuelve.
/*
let nombres = ["leandro","khloe","aika"];

document.write(nombres + "<br>");

let resultado = nombres.shift();

document.write(resultado + "<br>");
// devuelce leandro porque es la primera posicion y ademas lo elimino del arreglo.

document.write(nombres);
// veo el arreglo y quedo khloe,aika porque se elimino a leandro

*/



// push()
//-------------------------------------------------------//
// Agrega un elemento al final de la lista
/*
let nombres = ["leandro","khloe","aika"];

document.write(nombres + "<br>");

let resultado = nombres.push("perla negra");


document.write("arra con elemento agregado: " + nombres);
// devuelve el array con el elemento que agregamos al final de la lista.

*/



// reverse()
//-------------------------------------------------------//
// Invierte el orden de los elementos de una array
/*
let numeros = [1,2,3,4];

document.write(numeros + "<br>");

let resultado = numeros.reverse();

document.write(numeros);
// nos devuelve el array con el orden invertido.

*/



// unshift()
//-------------------------------------------------------//
// Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array.
/*
let numeros = [1,2,3,4,5];

document.write(numeros + "<br>");

numeros.unshift(1,3);
// nos agrega los elementos al array

document.write(numeros);
// devuelve el nuevo contenido del array 1,3,1,2,3,4,5

*/



// sort()
//-------------------------------------------------------//
// Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
/*
let numeros = [1,5,2,4,7,3,5];

document.write(numeros + "<br>");

numeros.sort();

document.write(numeros);
// nos devuelve el arreglo ordenado [1,2,3,4,5,5,7]
// tambien funciona de forma alfabetica.

*/



// splice()
//-------------------------------------------------------//
// Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
/*
let numeros = [1,5,2,4,7,3,5];

document.write(numeros + "<br>");

// Eliminar elementos
// numeros.splice(1,3);
// a partir de la posicion 1 elimina 3 elementos

// Eliminar elementos y agregar nuevos en su lugar
// numeros.splice(1,3,"hola","khloe","lean");

// Si quiero agregarlos en la posicion 0
// numeros.splice(0,0,"hola","khloe","lean");

// si quiero agregarlos al final del arreglo
numeros.splice(-1,0,"hola","khloe","lean");

document.write(numeros);
// Eliminado.
// nos devuelve el arreglo sin los 3 elementos eliminados [1,7,3,5]

// Agregado y eliminado.
// nos devuelve el arreglo con el reemplazo de los elementos [1,hola,khloe,lean,7,3,5]

// Agregado al principio
// nos devuelve el arreglo con los elementos agregados al principio del arreglo reemplazando los elementos anteriores [hola,khloe,lean,1,5,2,4,7,3,5]

*/



/* ACCESORES */

// join()
//-------------------------------------------------------//
// Une todos los elementos de una matriz (u objeto similar) en una cadena  y la devuelve.
/*
let numeros = ["aika","khloe","lean","fox"];

document.write(numeros + "<br>");

let resultado = numeros.join("<br>elemento: ");
// let resultado = numeros.join(" - ");
// nos crea una cadena de texto.
// dentro de los "" podemos poner la separacion de la cadena.

document.write("elemento: " + resultado);
// nos devuelve el array nuevo convertido en cadena de texto junto a los separadores que le asignamos en los "" [aika - klhoe - lean - fox].

*/



// slice()
//-------------------------------------------------------//
// Devuelve una parete del array dentro de un nuevo array epezando por inicio hasta fin (fin no incluido).
/*
let numeros = ["aika","khloe","lean","fox","fiat","vw"];

document.write(numeros + "<br>");

// let resultado = numeros.slice(0,2);

let resultado = numeros.slice(0,-3);
// nos muestra los elementos del array restando los 3 ultimos.
document.write(resultado);

*/



/* DE REPETICION */ 

// filter()
//-------------------------------------------------------//
// Crea un nuevo arra con todos los elementos que cumplan la condicion.
/*
let numeros = ["aika","khloe","lean","fox","fiat","vw"];

// numeros.filter((numero)=>{
//    document.write(numero + "<br>");
//});


// con filter podemos filtre en base a si se cumple tal condicion
resultado = numeros.filter(numero => numero.length > 4);
// le pedimos que nos muestre unicamente los que tienen mas de 4 letras.
document.write(resultado);
// nos devuelve khloe porque tiene mas de 4 letras.

// nos crea un nuevo array (resultado) solo con los elementos que cumplan la condicion que imponemos.

*/


// forEach()
//-------------------------------------------------------//
// Ejecuta la funcion indicada una vez por cada elemento del array.
/*
let numeros = ["aika","khloe","lean","fox","fiat","vw"];

numeros.forEach((numero)=>{
    document.write(numero + "<br>");
});

// nos recorre el array y hace que cada elemento nos cumpla cierta funcion.

*/

