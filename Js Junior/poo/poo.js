/* PROGRAMACION ORIENTADA A OBJETOS */

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