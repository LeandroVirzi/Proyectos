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

// Abstraccion de un objeto, es intentar reducir lo que mas podamos el objeto.
// Modularidad separar el problema por partes.
// Encapsulamiento es encapsular los datos para que no se tenga acceso desde otros lugares.
// Polimorfismo como los objetos se comportan distintos con el mismo metodo, solamente porque sus propiedades son distintas.
