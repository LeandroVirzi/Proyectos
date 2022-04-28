//-------------------------------------------------------//
                /* OPERADORES LOGICOS */
//-------------------------------------------------------//

/* Operadores Logicos */

let valor = false;
let valor2 = false;

// si las dos condiciones se cumplen = true
// true && true = true
// true && false = false
// false && false = false
let resultado = valor && valor2;

// si una de las condiciones es verdadera de vuelve true
// si las dos son falsas devuelve false
let resultado2 = valor || valor2;

// modifica el resultado al valor contrario.
// si es true lo convierte en false
let resultado3 = !valor;

document.write(resultado);


