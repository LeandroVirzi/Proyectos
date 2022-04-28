//-------------------------------------------------------//
                /* OBJETO MATH - BASICO */
//-------------------------------------------------------//
/* 
METODOS 

- sqrt() -
    Devuelve la raiz cuadrada de un numero.
- cbrt() -
    Devuelve la raiz cubica de un numero.
- max() -
    Devuelve el mayor de cero o mas numeros.
- min()
    Devuelve el mas pequeño de cero o mas numeros.
- random() -
    Devuelve un numero pseudo-aleatorio entre 0 y 1.
- round() - 
    Devuelve el valor de un numero redondeado al numero entero mas cercano.
- fround() -
    Devuelve la representacion flotante de precision simple mas cercana de un numero.
- floor() -
    Devuelve el mayor entero menor que o igual a un numero.
- trunc() -
    Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.

PROPIEDADES

- PI - 
    Radio de la circunferencia de un circulo respecto a su diametro, aprox 3.14 etc.
- SQRT1_2 -
    Raiz cuadrada de 1/2, equivalentemente, 1 sobre la raiz cuadrada de 2.
- SQRT2 - 
    Raiz cuadrada de 2

- E - 
    Constante de Euler, la base de los logaritmos naturales.
- LN2 - 
    Logaritmo natural de 2.
- LN10 - 
    Logaritmo natural de 10.
- LOG2E - 
    Logaritmo de E con base 2.
- LOG10E - 
    Logaritmo de E con base 10.

*/


// sqrt()
//-------------------------------------------------------//
// Devuelve la raiz cuadrada de un numero.
/*
numero = Math.sqrt(25);
// utilizamos el objeto Math
document.write(numero);
// nos devuelve la raiz cuadrada de 25 = 5

*/


// cbrt()
//-------------------------------------------------------//
// Devuelve la raiz cubica de un numero.
/*
numero = Math.cbrt(27);
document.write(numero);
// nos devuelve la raiz cubica de 27 = 3

*/


// max()
//-------------------------------------------------------//
// Devuelve el mayor de cero o mas numeros.
/*
numero = Math.max(27,3,2,5,6,4,8);
document.write(numero);
// dos devuelve el numero mas grande entre los que le pasemos, en este caso el 27

*/


// min()
//-------------------------------------------------------//
// Devuelve el mas pequeño de cero o mas numeros.
/*
numero = Math.min(27,3,2,5,6,4,8);
document.write(numero);
// nos devuelve el menor en este caso el 2.

*/


// random()
//-------------------------------------------------------//
// Devuelve un numero pseudo-aleatorio entre 0 y 1.
/*
numero = Math.random();
document.write(numero);

*/


// round()
//-------------------------------------------------------//
// Devuelve el valor de un numero redondeado al numero entero mas cercano.
/*
let numero = Math.random()*100;
// multiplico por 100 y nos devuelve decimales.
numero = Math.round(numero);
// saco los decimales redondeando el resultado.
// de esta forma redondeamos el resultado y obtenemos un numero random del 1 al 100.
document.write(numero);
// nos devuelve un numero random del 1 al 100.

*/



// floor()
//-------------------------------------------------------//
// Devuelve el mayor entero menor que o igual a un numero.
/*
let numero = Math.random()*99;
// no aparece el 0 y el 100 
numero = Math.floor(numero);
// redondea para abajo
document.write(numero);
// nos devuelve un numero random del 1 al 100.

*/


// fround()
//-------------------------------------------------------//
// Devuelve la representacion flotante de precision simple mas cercana de un numero.
/*
let numero = Math.fround(7.99999999);
// redondea el numero
document.write(numero);
// nos devuelve el numero redondeado en este caso 8

*/



// trunc()
//-------------------------------------------------------//
// Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.
/*
let numero = Math.trunc(8.9);

document.write(numero);
// elimina el reto del numero, osea que de 8.9 elimina el 9 y nos devuelve el 8 solo.

*/