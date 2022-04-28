//-------------------------------------------------------//
                    /* METODOS DE CADENAS */
//-------------------------------------------------------//

/* METODOS DE CADENAS 

- contac() - 
    Junta dos o mas cadenas y retorna una nueva.

- startsWith() - 
    Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

- endsWith() - 
    Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

- includes() - 
    Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

- indexOf() - 
    Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.



- padStart() [propuesta de estandar] - 
    Rellenar cadena al principio con los carcateres.

- padEnd() [propuesta de ECMA] -
    Rellenar cadena al final con los caracteres deseados.

- repeat() -
    Devuelve la misma cadena pero repetida la cantidad que le indiquemos.



- split() - Divide la cadena como le pidamos
- substring() - Nos retorna un pedazo de la cena que seleccionamos.
- toLowerCase() - Convierte una cadena en minuscula.
- toUppercase() - convierte una cadena en mayuscula.
- toString() - Convierte la cadena en String.
- trim() - Elimina los espacios en blanco.
- trimEnd() - Elimina los espacios en blanco del final de la cadena.
- trimStart() - Elimina los espacios en blanco del principio de la cadena.
- valueOf() - Retorna el valor primitivo de un objeto string
*/



// concat()
//-------------------------------------------------------//
// Junta dos o mas cadenas y retorna una nueva.

let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena.concat(cadena2);

document.write(resultado);
// cadena de prueba cadena 2





// startsWith()
//-------------------------------------------------------//
//Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);

document.write(resultado);
//  devuelve: true





// endsWith()
//-------------------------------------------------------//
// Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = "cadena de prueba";
let cadena2 = "prueba";

resultado = cadena.endsWith(cadena2);

document.write(resultado);
// devuelve: true





// includes()
//-------------------------------------------------------//
// Si una cadena termina con los caracteres de otra cadena, devuelve true, sino 

devuelve false.
let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.includes(cadena2);

document.write(resultado);
// devuelve: true





// indexOf()
//-------------------------------------------------------//
// Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.

let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.indexOf(cadena2);

document.write(resultado);
// devuelve la posicion del caracater, en este caso posicion 2.





//-------------------------------------------------------//
// lastIndexOF()

let cadena = "cadena de prueba prueba prueba";
let cadena2 = "prueba";

resultado = cadena.lastIndexOf(cadena2);

document.write(resultado);
// devuelva la ultima posicion donde se encuentran los caracteres buscados en este caso la posicion 24.




// padStart
//-------------------------------------------------------//
// Rellenar cadena al principio con los carcateres.

let cadena = "abc";
let cadena2 = "";

resultado = cadena.padStart(6,"a");

document.write(resultado);
// devuelve como resultado aaaabc (6 caracteres) agrego 3 caracteres a la cadena inicial.





// padEnd
//-------------------------------------------------------//
// Rellenar cadena al final con los caracteres deseados.

let cadena = "abc";
let cadena2 = "";

resultado = cadena.padEnd(6,"a");

document.write(resultado);
// devuelve abcaaa porque suma al final de la cadena aaa para que complete los 6 caracteres.





// repeat()
//-------------------------------------------------------//
// Devuelve la misma cadena pero repetida la cantidad que le indiquemos.

let cadena = " abc";
let cadena2 = "";

resultado = cadena.repeat(3);

document.write(resultado);
// devuelve abc abc abc repite la cadena la cantidad de veces que nosotros indiquemos.





// split()
//-------------------------------------------------------//
// Divide la cadena como le pidamos.

let cadena = "Hola como estas";

resultado = cadena.split(" ");

document.write(resultado);
// convierte la cadena en un array, y la divide cuando encuentra un espacio





// substring()
//-------------------------------------------------------//
// Nos retorna un pedazo de la cena que seleccionamos.

let cadena = "ABCDEFG";

resultado = cadena.substring(0,3);

document.write(resultado);
// devuelve de la posicion 0 a la 3 salteando la 3 osea ABC 0,1,2





// toLowerCase() 
//-------------------------------------------------------//
// Convierte una cadena en minuscula.

let cadena = "ABCDEFG";

resultado = cadena.toLowerCase();

document.write(resultado);
// devuelve la cadena en minuscula.





// toUpperCase
//-------------------------------------------------------//
// Convierte la cadena en mayusculas.

let cadena = "abcdefg";

resultado = cadena.toUpperCase();

document.write(resultado);
// devuelve la cadena en mayusculas.





// toString
//-------------------------------------------------------//
// Convierte la cadena en String.

let cadena = 50;

resultado = cadena.toString();

document.write(2 + resultado);
// devuelve 250 poruqe convirtio en string al 50





// trim()
//-------------------------------------------------------//
// Elimina los espacios en blanco.

let cadena = "     hola     hh"

let resultado = cadena.trim();

// document.write(resultado);
document.write(resultado.length);// nos dice los caracteres del array
// Elimino los espacios en blanco de la cadena.




// trimEnd()
//-------------------------------------------------------//
// Elimina los espacios en blanco del final de la cadena.

let cadena = "     hola     hh"

let resultado = cadena.trimEnd();

document.write(resultado);
// Elimino los espacios en blanco del final de la cadena.





// trimStart()
//-------------------------------------------------------//
// Elimina los espacios en blanco del principio de la cadena.

let cadena = "     hola     hh"

let resultado = cadena.trimStart();

document.write(resultado);
// Elimino los espacios en blanco del principio de la cadena.


