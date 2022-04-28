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