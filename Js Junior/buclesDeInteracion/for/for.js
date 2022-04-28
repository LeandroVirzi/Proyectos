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