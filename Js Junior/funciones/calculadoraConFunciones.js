
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

