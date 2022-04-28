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