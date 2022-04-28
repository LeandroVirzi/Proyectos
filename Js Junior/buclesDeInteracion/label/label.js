// Label
//-------------------------------------------------------//
// permite asociar un un bucle a un nombre para poder ejecutarlo cuando queramos

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

forLabel:
for (let array in array2){
    if (array == 2){

        for (let array of array1){
            continue forLabel;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
};

