//-------------------------------------------------------//
                    /* EJERCICIOS */
//-------------------------------------------------------//

// https://www.youtube.com/watch?v=z95mZVUcJ-E&t=16251s
// 5:01:12


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





