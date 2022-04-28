//-------------------------------------------------------//
                    /* CONSOLA */
//-------------------------------------------------------//

/* FUNCIONES DE REGISTRO 

- assert() -
    Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparece nada. (NO ESTANDAR).
- clear() -
    Limpia la consola.
- error() -
    Muestra un mensaje de error en la consola web.
- info() -
    Emite un mensaje informativo a la consola web. En firefox y chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web.
- log() -
    Muestra un mensaje en la consola web (o del interpetre de javascript).
- table() -
    Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola.
- warn() -
    Imprime un mensaje de advertencia en la consola web.
- dir() -
    Despliega una lista interactiva de la propiedades del objeto javascript especifico.(NO ESTANDAR).
*/


/* FUNCIONES DE CONTEO 

- count() -
    Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.
- countReset() -
    Resetea el contador console.count().
*/ 


/* FUNCIONES DE AGRUPACION

- group() -
    Crea un nuevo grupo en linea en el registro de la consola web.
- grupEnd() -
    Remueve un grupo en linea en el registro de la consola web.
- groupCollapsed() -
    Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.
*/


/* FUNCIONES DE TEMPORIZACION 
- time() -
    Inicia un temporizador.
- timeEnd() -
    Registra el valor actual de un temporizado.
- timeLog() -
    Detiene el temporizador.
*/



/* FUNCIONES DE REGISTRO EJEMPLOS */ 

// assert ()
//-------------------------------------------------------//
// Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparece nada. (NO ESTANDAR).

// console.assert(5 < 4);

// en este caso nos devuelve un mensaje mediante consola ya que 5 es menos a 4, Assertion failed: console.assert - en el caso que sea correcta la afirmacion no nos aparecera nada en consola.



// clear ()
//-------------------------------------------------------//
// Limpia la consola.

// console.clear();

// si utilizo este codigo por consola, este nos limpia los registros anteriores dejando en blanco la consola.




// error ()
//-------------------------------------------------------//

// Muestra un mensaje de error en la consola web.

// console.error("ocurrio un error");

// predefinimos un mensaje de error en la consola. nos muestra un mensaje de error en la consola del navegardor con el mensaje que definimos anteriormente.
/*
let mensaje = prompt("ingrese el mensaje de error");
let num = false;
if (num == false) {
    console.error(mensaje);
    num = true;
}

*/


// info()
//-------------------------------------------------------//
// Emite un mensaje informativo a la consola web. En firefox y chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web.

// console.info("este es un mensaje informativo");

// funciona de igual forma que un console.log, pero esto es un mensaje informativo, y el otro es de depuracion.



// table()
//-------------------------------------------------------//
// Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola.

// console.table([4,5,4,8,4,2,5,6,3,4,7]);

// pasamos un array y nos devuelve el mismo en forma de tabla en la consola, mostrando el contenido y la posicion.




// warn()
//-------------------------------------------------------//
// funciona como error pero este muestra una advertencia en amarillo.

// console.warn("advertencia");

// cartel de advertencia en amarillo.



/* FUNCIONES DE CONTEO EJEMPLOS*/ 

// count() conuntReset()
//-------------------------------------------------------//
// Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.
/*
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
*/
// me va a decir cuantas veces ejecute esta funcion.

// console.countReset();

// resetea el count de cuantas veces ejecute cierte accion. 