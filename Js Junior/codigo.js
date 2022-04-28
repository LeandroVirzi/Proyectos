/**
 * 
 * CURSO JAVASCRIPT DESDE CERO A NIVEL JUNIOR.
 * 
 * DESCOMENTAR PARA POR VERIFICAR CADA TEMA EN ESPECIFICO.
 * EL CODIGO SE ENCUENTRA SEC TORIZADO POR TEMA EN ESPECIFICO.
 * 
 * 
 * https://www.youtube.com/watch?v=z95mZVUcJ-E&t=6379s
 * 
 */

//-------------------------------------------------------//

/* MENU DEL JUNIOR

0:00 - Introducción
0:49 - Niveles del curso
4:12 - Dinámica del curso

---------- CAPITULO 1 ----------

5:26 - Apertura del capitulo 1
7:25 - Introducción a javascript
15:40 - Editor de texto
22:26 - Usos de javascript
24:44 - Formas de incluir javascript
27:52 - Todo sobre variables
46:14 - Pedir datos con prompt
49:51 - Operadores en javascript (Básico) 
1:03:54 - Concatenación
1:10:40 - Template Strings y el uso de Backticks
1:15:41 - Operadores en javascript (Intermedio)
1:34:57 - Camel Case en javascript
1:37:02 - Condicionales
1:45:38 - Historia de Cofla 1 (Crear soluciones)

---------  CAPITULO 2  ---------

2:00:16 - Apertura del capitulo 2
2:03:26 - Arrays
2:15:09 - Arrays Asociativos (Objetos)
2:23:28 - Bucles e iteración (While, For, etc...)
3:05:49 - Funciones
3:33:54 - Historia de Cofla 2 (Crear soluciones)

--------- CAPITULO 3 ----------

4:03:44 - Apertura del capitulo 3
4:07:35 - POO (Programación orientada a objetos)
4:09:25 - Conceptos básicos de la Programación orientada a objetos
4:22:27 - Caracteristicas de la Programación orientada a objetos
4:34:44 - Otros conceptos de Programación orientada a objetos
4:41:25 - Historia de Cofla 3 (Crear soluciones)

--------  CAPITULO 4  ---------

5:10:02 - Apertura del capitulo 4
5:12:52 - Métodos de cadenas
5:42:43 - Métodos de arrays
6:08:10 - Objeto Math
6:21:21 - Historia de Cofla 4 (Crear soluciones)

---------  CAPITULO 5 ----------

6:57:29 - Apertura de capitulo 5
6:59:46 - Console (Consola de javascript)
7:02:42 - Métodos de registro en console
7:09:14 - Métodos de conteo en console
7:11:47 - Métodos de agrupación en console
7:15:04 - Métodos de temporización en console
7:21:33 - Historia de Cofla 5 (Crear soluciones)

---------  CAPITULO 6 ---------

7:39:26 - Apertura de capitulo 6
7:42:26 - El DOM (Document Object Model)
7:50:26 - Métodos de selección de elementos 
7:59:52 - Métodos de atributos de un elemento
8:06:39 - Atributos globales
8:15:23 - Atributos de inputs
8:29:46 - Propiedad Style
8:34:30 - Clases, classList y sus métodos
8:44:20 - Obtención y modificación de elementos
8:52:40 - Creación de elementos
9:03:20 - Obtención y modificacion de childs
9:13:03 - Métodos de childs (hijos)
9:18:35 - Propiedades de parents (Padres)
9:21:02 - Propiedades de siblings (Hermanos)
9:23:46 - Nodos, una propiedad extra
9:26:25 - Historia de cofla 6 (Crear soluciones)

-------- CIERRE DEL NIVEL JUNIOR --------

9:57:04 - Próximo nivel y felicitaciones
9:58:20 - Agradecimientos especiales
10:00:07 - Frase final y créditos

*/


//-------------------------------------------------------//
                    /* VARIABLES */
//-------------------------------------------------------//

/* Variables

    string = "cadena de texto";
    number = 19;
    boolean = true;
    boolean = false; 

*/




//-------------------------------------------------------//
               /*DEFINICION DE  VARIABLES */
//-------------------------------------------------------//

/* Definicion de variables.

// Las variables constantes const no puede modificar su valor.
const pi = 3.14;
// Metodo promp toma valor del teclado.
let teclado = prompt("escriba el valor");

*/




//-------------------------------------------------------//
                /* CONCATENACION DE VARIABLES */
//-------------------------------------------------------//


// concat()
//-------------------------------------------------------//
// concat es un metodo para concatenar string.
/*
numero1 = "53";
numero2 = 8;
frase = numero1.concat(numero2);
document.write(frase);
// Resultado de la concatenacion de numero1 y numero2 es 538.

nombre = "Leandro Virzi";
// brackticks
frase = `soy ${nombre} y estoy caminando`;
document.write(frase);
// ${nombre} viene a reemplazar "soy"+ nombre+"estoy camindo"

*/




//-------------------------------------------------------//
                /* OPERADORES DE COMPARACION */
//-------------------------------------------------------//

/* Operadores de comparacion 

let numero = 23;
let numero2 = 13;

// numero es igual a numero2 ? 
// de esta forma no discrimina el tipo de valor si es texto o un numero == pero si utilizamos este === si lo discrimina.
document.write(numero == numero2);

// numero es distinto a numero2?
document.write(numero != numero2);

// numero es mayor que numero2?
document.write(numero > numero2);

// numero es menor que numero2?
document.write(numero < numero2);


// numero es mayor o igual a numero2?
document.write(numero >= numero2);


// numero es menor o igual a numero2?
document.write(numero <= numero2);

*/




//-------------------------------------------------------//
                /* OPERADORES LOGICOS */
//-------------------------------------------------------//

/* Operadores Logicos 

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


*/



//-------------------------------------------------------//
                    /* CONDICIONALES */
//-------------------------------------------------------//

/* Condicionales 

if ( 10 < 15){
    alert("10 es menor a 15");
} else {
    alert("no lo es");
}

if ("pedro" == "pedro"){
    alert("hola son iguales")
} else {
    alert("no son iguales");
}


let nombre = prompt("Escriba su nombre");

if (nombre == "leandro"){
    alert(`su nombre es ${nombre} y es correcto`)
} 
else if (nombre == "khloe") {
    alert(`su nombre es ${nombre} y esta autorizado`);
} 
else {
    alert("usted no esta autorizado");
}

*/





//-------------------------------------------------------//
                    /* ARREGLOS ARRAYS */
//-------------------------------------------------------//

/* Arreglos Arrays 

frutas = ["banana","manzana","pera"];

alert(frutas[0]);//banana


// Array asociativo

//como llamar a un dato que se encuentra dentro de un array, llamarlo por el nombre y no por la posicion.

let pc = {
    nombre: "LeandroPC",
    procesador: "Intel Core I5",
    ram: "12GB",
    espacio: "240GB"
};

//document.write(pc["nombre"]);
//document.write(pc["ram"]);

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de <b>${espacio}</b>`;

document.write(frase);

*/




//-------------------------------------------------------//
                /* BUCLES DE INTERACION */
//-------------------------------------------------------//

/* Bucles e Interacion 

// While
//-------------------------------------------------------//
let numero = 0;

while (numero < 6) {
    numero++;

    document.write(numero + "<br>");
};



// Do While
//-------------------------------------------------------//
// do while, primero hago lo que quiero que haga y luego pregunto la condicion 

let numero = 0;
// hago lo que quiero que haga.
do {
    document.write(numero + "<br>");
    numero++;

}
// pregunto la condicion.
while (numero <= 6);



// BreaK
//-------------------------------------------------------//
// break es darle una pausa al proceso en cierto punto.
let numero = 0;
while(numero < 1000) {
    numero++;
    document.write(numero);

    // cuando numero sea igual a 10 que finalice el bucle.
    if (numero == 10) {
        break;
    }
   
}



// Ciclo For
//-------------------------------------------------------//
// incremento

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>");
};


// decremento
//-------------------------------------------------------//
for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>");
};

// ejecutar i fuera del bucle para utilizarla en el bucle.
let i = 6;
for (i; i >= 0; i--) {
    document.write(i + "<br>");
};
document.write(i);


// For Break
//-------------------------------------------------------//
// si quisieramos que el bucle finalizara por ej en la vuelta 12.
for(i = 0; i < 20; i++) {
    document.write(i + "<br>");
    if (i == 12){
        break;
    };
};


// For Continue
//-------------------------------------------------------//
// si yo quisiera por ej saltearme el numero 12.
for(i = 0; i < 20; i++) {
    if (i == 12){
        continue;
    };
    document.write(i + "<br>");
};


// For In
//-------------------------------------------------------//
// lo que hace IN es devolvernos la posicion dentro del array.
let animales = ["gato","perro","tiranosaurio rex"];

for (animal in animales) {
    document.write(animal + "<br>");
};
// nos devuelve las posiciones 0, 1 y 2.

document.write("<br>");


// For Of
//-------------------------------------------------------//
// lo que hace OF es devolvernos el contenido del array.
let animales = ["gato","perro","tiranosaurio rex"];

for (animal of animales) {
    document.write(animal + "<br>");
};
// nos devuelve gato, perro y tiranosaurio rex.


// Label
//-------------------------------------------------------//
// permite asociar un un bucle a un nombre para poder ejecutarlo cuando queramos

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

forLabel:
for (let array in array2){
    if (array == 2){

        for (let array of array1){
            continue forLabel;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
};

*/




//-------------------------------------------------------//
                    /* FUNCIONES */
//-------------------------------------------------------//

/* Funciones 

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

*/




//-------------------------------------------------------//
                    /* EJERCICIOS */
//-------------------------------------------------------//

// https://www.youtube.com/watch?v=z95mZVUcJ-E&t=6379s
//  3:34:57


/*
PROBLEMA A
    -Dejar pasar a los +18 años.
    -El primero que entre despues de las 2 am, no paga

PROBLEMA B
    - 19 alumnos en total.
    -Crear un mini-sistema para registrar presentes (p) y ausentes(a).
    -Pasados los 30 días, mostrar su situacion final del alumno.
    -Maximo de 10% de ausencias.
*/

/* PROBLEMA A
let free = false;

const validarClientes = (time)=>{
    let edad = prompt("¿cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("podes ingresar gratis");
            free = true;
        } else {
            alert(`son las ${time}:00HS y podes pasar pero tenes que pagar`);
        }
    } else {
        alert("no podes pasar sos menor de edad");
    }
}

validarClientes(23);
validarClientes(24);
validarClientes(0.2);
validarClientes(0.6);
validarClientes(1);
validarClientes(2);
validarClientes(2.4);
validarClientes(3);




// ingreso cantidad de alumnos.
let cantidad = prompt("¿cuantos alumnos son:?");
// creo un array vacio para alumnos totales.
let alumnosTotales = [];

// vamos a rellenar el array de alumnosTotales con un bucle for.
for (i = 0; i < cantidad; i++){
    // i se va a ejecutar mientras sea menor que cantidad.
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
    // creo un array dentro de otro array, 
    // dentro de alumnosTotales creo un array que contiene el nombre y donde esta el 0 indica las asistencias del alumno.

}

// Creo una funcion para tomar la asistencia.
const tomarAsistencia  = (nombre,p)=>{
    // la funcion pide como parametro el nombre y la posicion en la lista.
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        // por si ingresa el dato en minuscula o mayuscula
        alumnosTotales[p][1]++;
        // ingreo a la posicion en i del array y tambien accedo al array que se encuentra dentreo de ese array, ya que es un array que contiene otro mas dentro de el.
    }
}

// ciclo for que valide los 30 dias de asistencia.
for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: ${alumnosTotales[alumno][1]} <br>
    ______Ausencias: ${30 - alumnosTotales[alumno][1]} 
    `;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br>";
    } else {
        resultado+= "<br><br>";
    }
    document.write(resultado);
}




// CALCULADORA

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const smultiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿que operacion quiere realizar?");
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operacioin");
}

*/




//-------------------------------------------------------//
            /* PROGRAMACION ORIENTA A OBJETOS */
    /*POLIMORFISMO - HERENCIA - SET - GET - STATIC*/
//-------------------------------------------------------//

/* PROGRAMACION ORIENTADA A OBJETOS 

class animal {
    // (parametros que va a contener nuestra clase)
    constructor(especie,edad,color){
        // this le dice que el objeto va a tener una propiedad
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }
    // Metodo, es una funcion dentro de  una clase.
    verInfo(){
        document.write(this.info);
    };
};

// perro va a ser igual a un objeto de la clase animal
const perro = new animal("perro",5,"marron");
const gato = new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde");

// como acceder a las propiedades, las accedemos con un .
//document.write(perro.color);// nos devuelve rojo.


// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");
perro.verInfo();
gato.verInfo();
pajaro.verInfo();



class vehiculo {
    constructor(marca,ano,color,modelo){
        this.marca = marca;
        this.ano = ano;
        this.color = color;
        this.modelo = modelo;
        this.info = `<br> ficha del vehiculo <br>
        Marca: ${this.marca} <br>
        Año: ${this.ano}, <br> 
        Color: ${this.color}<br> 
        Modelo: ${this.modelo}`;
    }
    verInfo() {
        document.write(this.info);
    }
}

const camion = new vehiculo("mercedes",1970,"azul",1114);
const auto = new vehiculo("vw",2008,"negro","fox");
camion.verInfo();
auto.verInfo();


// Abstraccion de un objeto, es intentar reducir lo que mas podamos el objeto.
// Modularidad separar el problema por partes.
// Encapsulamiento es encapsular los datos para que no se tenga acceso desde otros lugares.
// Polimorfismo como los objetos se comportan distintos con el mismo metodo, solamente porque sus propiedades son distintas.


// Polimorfismo

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }
    // Metodos
    verInfo(){
        document.write(this.info);
    };
    // solo va a poder ladrar el perro.
    // Static
    // Un metodo statico es uno que no necesita que la clase se defina para ser creado.
    static ladrar(){
        if(this.especie == "perro"){
            document.write("¡Waw! <br>");
        } else {
            document.write(`No puede ladrar, ya que es un ${this.especie} <br>`);
        }
    }
};

// Herencia
// creo la clase perro que herede el contenido de la clase animal.
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        // la clase perro va a heredar los siguientes atributos.
        super(especie,edad,color);
        this.raza = null;
    }

    // Set
    // Con set modificamos un valor de una propiedad de la clase mediante un metodo.
    set setRaza(newName){
        this.raza = newName;
    }

    // Get
    // este se utiliza para obtener informacion.
    get getRaza(){
        return this.raza;
    } 

    // Set = modificamos un valor.
    // Get = obtenemos un valor.
    
}

// Objetos
const perro = new Perro("perro",5,"marron","waimaraner");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");

// set
perro.setRaza = "Khloe";
// document.write(perro.raza);

//get
document.write(perro.getRaza);

// polimorfismo ya que solo puede ladrar el perro.
// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

//Static
//Perro.ladrar();

*/




//-------------------------------------------------------//
                    /* EJERCICIOS */
//-------------------------------------------------------//

// https://www.youtube.com/watch?v=z95mZVUcJ-E&t=16251s
// 5:01:12

/*
// PROBLEMA A

// Mostrar las particularidades de los 3 celulares.
// Cada uno debe tener color, peso, resolucion de pantalla, camara y memoria ram.
// Deben poder prender, reiniciar, tomar fotos y grabar.

// PROBLEMA B
// Implementar las cualidades camara lenta, una camara mas, reconocimiento facial.(extends)

// PROBLEMA C
// Crear un sistema para decidir que aplicacion descargar.
// Debe contener la cantidad de descargas, puntuacion y peso.
// Se deben poder instalar, abrir, cerrar y desinstalar.


// SOLUCION PROBLEMA A

class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    
    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("el celular se encuentra apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo (){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoria}</b><br>
        `
    }
}

// SOLUCION PROBLEMA B

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        // Heredo las propiedades de la clase anterior y agrego otras propiedades.
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camaa extra: ${this.resolucionDeCamaraExtra}`
    }
}

// celular1 = new Celular("rojo","150g","5'","hd","1gb");
// celular2 = new Celular("negro","155g","5.4'","full hd","2gb");
// celular3 = new Celular("blanco","146g","5.9'","full hd","2gb");


celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3gb","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4k","4gb","hd");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
    
`);

// Prendo
// celular1.presionarBotonEncendido();
// Tomo foto
// celular1.tomarFoto();
// Grabo video
// celular1.grabarVideo();
// Reinicio el celular
// celular1.reiniciar();
// Apago el celular
// celular1.presionarBotonEncendido();


// document.write(`
    // ${celular1.mobileInfo()} <br>
    // ${celular2.mobileInfo()} <br>
    // ${celular3.mobileInfo()} <br>
// `);




// SOLUCION PROBLEMA C

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }

    desinstalada(){
        if (this.instalada == true){
            this.instalada =  false;
            alert("app desinstalada");
        }
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }

    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }

    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

app = new App("16.000","5 estrellas","960mb");
app2 = new App("16.000","4 estrellas","723mb");
app3 = new App("16.000","5 estrellas","500mb");
app4 = new App("16.000","4 estrellas","760mb");
app5 = new App("16.000","5 estrellas","360mb");
app6 = new App("16.000","2.8 estrellas","160mb");
app7 = new App("16.000","3 estrellas","723mb");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>

`);

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalada();

*/




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
/*
let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena.concat(cadena2);

document.write(resultado);
// cadena de prueba cadena 2

*/



// startsWith()
//-------------------------------------------------------//
//Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
/*
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);

document.write(resultado);
//  devuelve: true

*/



// endsWith()
//-------------------------------------------------------//
// Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
/*
let cadena = "cadena de prueba";
let cadena2 = "prueba";

resultado = cadena.endsWith(cadena2);

document.write(resultado);
// devuelve: true

*/



// includes()
//-------------------------------------------------------//
// Si una cadena termina con los caracteres de otra cadena, devuelve true, sino 
/*
devuelve false.
let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.includes(cadena2);

document.write(resultado);
// devuelve: true

*/



// indexOf()
//-------------------------------------------------------//
// Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
/*
let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.indexOf(cadena2);

document.write(resultado);
// devuelve la posicion del caracater, en este caso posicion 2.

*/



//-------------------------------------------------------//
// lastIndexOF()
/*
let cadena = "cadena de prueba prueba prueba";
let cadena2 = "prueba";

resultado = cadena.lastIndexOf(cadena2);

document.write(resultado);
// devuelva la ultima posicion donde se encuentran los caracteres buscados en este caso la posicion 24.

*/



// padStart
//-------------------------------------------------------//
// Rellenar cadena al principio con los carcateres.
/*
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padStart(6,"a");

document.write(resultado);
// devuelve como resultado aaaabc (6 caracteres) agrego 3 caracteres a la cadena inicial.

*/



// padEnd
//-------------------------------------------------------//
// Rellenar cadena al final con los caracteres deseados.
/*
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padEnd(6,"a");

document.write(resultado);
// devuelve abcaaa porque suma al final de la cadena aaa para que complete los 6 caracteres.

*/



// repeat()
//-------------------------------------------------------//
// Devuelve la misma cadena pero repetida la cantidad que le indiquemos.
/*
let cadena = " abc";
let cadena2 = "";

resultado = cadena.repeat(3);

document.write(resultado);
// devuelve abc abc abc repite la cadena la cantidad de veces que nosotros indiquemos.

*/



// split()
//-------------------------------------------------------//
// Divide la cadena como le pidamos.
/*
let cadena = "Hola como estas";

resultado = cadena.split(" ");

document.write(resultado);
// convierte la cadena en un array, y la divide cuando encuentra un espacio

*/



// substring()
//-------------------------------------------------------//
// Nos retorna un pedazo de la cena que seleccionamos.
/*
let cadena = "ABCDEFG";

resultado = cadena.substring(0,3);

document.write(resultado);
// devuelve de la posicion 0 a la 3 salteando la 3 osea ABC 0,1,2

*/



// toLowerCase() 
//-------------------------------------------------------//
// Convierte una cadena en minuscula.
/*
let cadena = "ABCDEFG";

resultado = cadena.toLowerCase();

document.write(resultado);
// devuelve la cadena en minuscula.

*/



// toUpperCase
//-------------------------------------------------------//
// Convierte la cadena en mayusculas.
/*
let cadena = "abcdefg";

resultado = cadena.toUpperCase();

document.write(resultado);
// devuelve la cadena en mayusculas.

*/



// toString
//-------------------------------------------------------//
// Convierte la cadena en String.
/*
let cadena = 50;

resultado = cadena.toString();

document.write(2 + resultado);
// devuelve 250 poruqe convirtio en string al 50

*/



// trim()
//-------------------------------------------------------//
// Elimina los espacios en blanco.
/*
let cadena = "     hola     hh"

let resultado = cadena.trim();

// document.write(resultado);
document.write(resultado.length);// nos dice los caracteres del array
// Elimino los espacios en blanco de la cadena.
*/



// trimEnd()
//-------------------------------------------------------//
// Elimina los espacios en blanco del final de la cadena.
/*
let cadena = "     hola     hh"

let resultado = cadena.trimEnd();

document.write(resultado);
// Elimino los espacios en blanco del final de la cadena.

*/



// trimStart()
//-------------------------------------------------------//
// Elimina los espacios en blanco del principio de la cadena.
/*
let cadena = "     hola     hh"

let resultado = cadena.trimStart();

document.write(resultado);
// Elimino los espacios en blanco del principio de la cadena.

*/




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




//-------------------------------------------------------//
                    /* EJERCICIOS */
//-------------------------------------------------------//

// PROBLEMA A 
// Perfeccionar calculadora.
// Implementar nuevas funciones.

// PROBLEMA B 
// Que la funcion nos devuelva:
//      - Profesor asignado.
//      - Nombre de los alumnos.
// Funcion que nos indique en cuantas clases esta cofla.
// Nombre de esas clases y sus profesores.

// PROBLEMA C 
// Preguntarle en que materias se quiere anotar.
// Si hay mas de 20 alumnos inscriptos, negarle la inscripcion.
// Si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos.



// SOLUCION PROBLEMA A
// CALCULADORA
/*
class Calculadora {
    constructor() {
    }

    sumar (num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    
    restar (num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    
    dividir (num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    
    multiplicar (num1,num2){
        return parseInt(num1) * parseInt(num2);
    }

    pontenciar (num,exp){
        return num**exp;
    }

    raizCuadrada (num){
        return Math.sqrt(num);
    }
    
    raizCubica (num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿que operacion quiere realizar?");
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5:  potenciacion, 6: Raiz cuadrada, 7: Raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("número a potenciar ");
    let numero2 = prompt("exponente");
    resultado = calculadora.pontenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("conocer raiz cuadrada de: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("conocer raiz cubica de: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operacioin");
}

*/


//SOLUCION PROBLEMA B
/*
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["leandro","khloe","aika","fox"],
        programacion: ["leandro","khloe"],
        logica: ["leandro","khloe","fox"],
        quimica: ["leandro","khloe","aika","fox"]
    }
    if (materias[materia] !== undefined){
        return materias[materia];
    } else {
        return "la materia no existe"
    }
}

let informacion = obtenerInformacion("logica")
document.write(informacion);

*/



//SOLUCION PROBLEMA C
/*
let materias = {
    fisica: ["leandro","khloe","aika","fox"],
    programacion: ["leandro","khloe"],
    logica: ["leandro","khloe","fox"],
    quimica: ["leandro","khloe","aika","fox"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();// para eliminar el primer registro.
    alumnos = personas;
    if (alumno.length >= 20){
        document.write(`lo siento <b>${alumno}<b>,  las clases de ${materia} ya estan llenas`);
    } else {
        alumnos.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: alumnos,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: alumnos,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: ["programacion"],
                logica: alumnos,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: ["programacion"],
                logica: materias["logica"],
                quimica: alumnos
            }
        }
        document.write(`alumno ${alumno} te has inscripto en ${materia}`);
    }
}

inscribir("aika","fisica");

*/



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


//-------------------------------------------------------//
                    /* EJERCICIOS */
//-------------------------------------------------------//

// PROBLEMA A 
// Termino el primer semestre y cofla no sabe si aprobara o no las materias, para lograrlo necesitara contar con al menos el 90% de asistencia.
// El promedio por materia debe ser de al menos 7 / 10.
// Debe tener al menos del 75% de los trabajos practicos entregados.
    // Solicitar los datos y decirle si aprueba o no.
    // mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo).


// lo que hace IN es devolvernos la posicion dentro del array.
/*
const materias = {
    // fisica 90% asistencias, promedio 6, cantidad de trabajos entregados 3 de 4.
    fisica: [90,6,3,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

// creo una funcion de flecha
const aprobo = ()=>{
    for (materia in materias){
        // in nos devuelve la posicion y crea la variable materia.
        let asistencias = materias[materia][0];
        // muestra la asistencia, ej fisica 90.
        let promedio = materias[materia][1];
        // muestra el promedio, ej fisica 6.
        let trabajos = materias[materia][2];
        // muestra los trabajos entregados, ej fisica 3.

        console.log(materias[materia][3]);
        // muestra el nombre de la materia que esta en la posicion 3, ej fisica en la pos 3 dice fisica.

        // Asistencias
        if (asistencias >= 90) {
            // que nos muestre un mensaje de aprobado con color verde
            console.log("%c   Asistencias en orden","color:green");
        } else {
            console.log("%c   Falta de Asistencias","color:red");
        }

        // Promedio
        if (promedio >=7){
            console.log("%c   Promedio en orden","color:green");
        } else {
            console.log("%c   Promedio Desaprobado","color:red");
        }

        // Trabajos practicos
        if (trabajos >= 7){
            console.log("%c   Trabajos Practicos Aprobados","color:green");
        } else {
            console.log("%c   Faltan Trabajos Practicos","color:red");
        }
    }
}

aprobo();

*/




//-------------------------------------------------------//
                      /* DOM */
//-------------------------------------------------------//

// como capturo el html en js. seleccionar un objeto entero.
// capturar el elmento mediante el ID.

// parrafo = document.getElementById("parrafo");
// document.write(parrafo);

// capturar el elemento mediante el NAME.
// parrafo = document.getElementsByTagName("p");

// seleccionar mediante CLASS.
// parrafo = document.querySelector(".parrafo");
// document.write(parrafo);
 
// de esta manera tomamos a todos los elementos con la clase parrafo.
// parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo[0]);




//-------------------------------------------------------//
// setAttribute() - getAttribute() - removeAttribute()
//-------------------------------------------------------//

// METODOS PARA DEFINIR, OBTENER Y ELIMINER VALORES DE ATRIBUTOS.

// setAttributte()
//-------------------------------------------------------//
// const rangoEtario = document.querySelector(".rangoEtario");
// modifico el atributo.
// rangoEtario.setAttribute("type","number");


// getAttributte()
//-------------------------------------------------------//
// acceder al atributo.
// const rangoEtario = document.querySelector(".rangoEtario");
// valorDelAtributo = rangoEtario.getAttribute("type");

// removeAttribute()
//-------------------------------------------------------//
// elimina el atributo type.
// const rangoEtario = document.querySelector(".rangoEtario");
// valorDelAtributo = rangoEtario.removeAttribute("type");





//-------------------------------------------------------//
//                 ATRIBUTOS GLOBALES
//-------------------------------------------------------//
/*
- contenteditable -
    Indica si el elemento puede ser modificable por el usuario (bool).

- dir -
    Indica la direccionalidad del texto.

- hidden -
    Indica si el elemento aun no es, o ya no es, relevante.

- tabindex -
    Indica si el elemento puede obtener un focus de input.

- title -
    Contiene un texto con informacion relacionada al elemento al que pertenece.
*/


// contentEditable 
//-------------------------------------------------------//
/*
// selecciono la etiqueta mediante a clase con querySelector. en este caso tiene la clase titulo.
const titulo = document.querySelector(".titulo");

// como voy a modificar el atributo de la clase, utilizo setAttribute y le paso el atributo global (contentEditble) -> en este caso si pongo true nos deja editar por nuestro lado el html.
titulo.setAttribute("contentEditable","true");

*/


// dir 
//-------------------------------------------------------//
// mueve el contenido de derecha a izquierda o de izq a der.
/*
const titulo = document.querySelector(".titulo");

titulo.setAttribute("dir","ltr");
*/


// hidden
//-------------------------------------------------------//
// oculta al elemento
/*
const titulo = document.querySelector(".titulo");

titulo.setAttribute("hidden","true");

*/


// tabindex
//-------------------------------------------------------//
// permite seleccionar el elemento, hacer un focus
/*
const titulo = document.querySelector(".titulo");

titulo.setAttribute("tabindex","0");

*/

// title
//-------------------------------------------------------//
// cuando apollemos el cursor sobre el elemento nos permite reflejar un mensaje.

/*
    <h1 class="titulo" title="mensaje del title">titulo</h1>

// asi lo modificamos desde el js.
const titulo = document.querySelector(".titulo");

titulo.setAttribute("title","ajajajja");

*/




//-------------------------------------------------------//
//                 ATRIBUTOS DE LOS INPUTS
//-------------------------------------------------------//

/*
- className
    Nos muestra lo que s e encuentra dentro de la clase.
- value
    Nos muestra el valor del value
- type
    Nos muestra el valor del type y tambien se puede modificar su valor.
- accept
    Define que va aceptar, ej en un type="file" solo formato png.
- form
- minlength
    Minimo de caracteres que debe completarse para poder ser enviada la peticion al servidor.
- placeholder
    Nos deja colocar un mensaje en el input.
- required
    Campo requerido - obligatorio.

*/

// className
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

document.write(input.className);
// nos mostro lo que se encuentra dentro de la clase. input-normal.

*/


// value
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

document.write(input.value);
// nos muestra el valor del value.

*/


// type
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

//document.write(input.type);
// nos muestra el valor del type, pero tamnbibien podemos modificarlo.

document.write(input.type = "number");
// modifico el valor edel type a number.

*/


// accept
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

input.accept = "image/png";
// esto lo que hace es definir que va aceptar, por ejemplo en este caso solo va aceptar las imagenescon formato png.

*/


// minlength
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

input.minLength  ="4";

// para editar el valor.
input.setAttribute("minLength","5");

*/


// placeholder
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

input.placeholder = "hola ingrese los datos";

*/


// required
//-------------------------------------------------------//
/*
const input = document.querySelector(".input-normal");

input.required = " ";

*/




//-------------------------------------------------------//
//                 ATRIBUTOS STYLE
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

titulo.style.color = "red";

// de esta manera modificamos el color a rojo.

*/




//-------------------------------------------------------//
//       CLASES, classList y METODOS DE classList
//-------------------------------------------------------//
/*
- Definicion y usos.
- add() -
    Añade una clase.

- remove() -
    Remueve una clase.

- item() -
    Devuelve la clas del indice especificado.

- contains() -
    Verifica si ese elemento posee o no, la clase especificada.

- replace() -
    Reemplaza una clase por otra.

- toggle() -
    Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

*/


// add()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");
// agrego la clase grande al elemento.
*/


// remove()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

titulo.classList.remove("grande");
// nos remueve la clase grande.

*/

// item()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.item(1);

document.write(valor);

// nos permines navegar las clases segun la posicion.

*/


// contains()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.contains("grande");

document.write(valor);

// nos permite verificar si la clase se encuentra en el elemento. true o false.

*/


// toggle()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

titulo.classList.toggle("grande",true);
// si la tiene la deja.
titulo.classList.toggle("grande",false);
// siempre la va a sacar.

titulo.classList.toggle("grande");
// en caso que la clase se encuentre la elimina y si no se encuentra la agrega.

*/


// replace()
//-------------------------------------------------------//
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.replace("grande","chico");

document.write(valor);

*/




//-------------------------------------------------------//
//        OBTENCION Y MODIFICACION DE ELEMENTOS
//-------------------------------------------------------//

/*
- textContent - devuelve el texto de cualquier nodo.

- innerText - devuelve el texto visible de un node elemento.

- innerHteml - devuelve el contenido html de un elemento.

- outerHtml - devuelve el codigo html complreto del elemento. 
*/




//-------------------------------------------------------//
//              CREACION DE ELEMENTOS
//-------------------------------------------------------//
/*
- createElements()

- appendChild()

- createDocumentFragment()

*/



