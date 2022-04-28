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

/* PROBLEMA A */
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