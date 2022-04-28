//-------------------------------------------------------//
                    /* ARREGLOS ARRAYS */
//-------------------------------------------------------//

/* Arreglos Arrays */

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

