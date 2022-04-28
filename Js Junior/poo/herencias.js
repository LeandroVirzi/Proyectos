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