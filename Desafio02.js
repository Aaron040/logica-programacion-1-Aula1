let diaSem = prompt("Que dia de la semana es?");
if(diaSem == "sabado" || diaSem == "domingo"  ){
    alert('Buen fin de semana');
}
else{
    alert("Buena semana");
}
let num = prompt("Digite un numero");
if(num == 0){
    alert("Numero es 0");
}
else if(num > 0){
    alert("Numero es positivo");
}
else{
    alert("Numero es negativo");
}
let puntuacion = prompt("digite la puntuacion");
if(puntuacion >= 100){
    alert("Has ganado");
}
else{
    alert("Intenta nuevamente");
}
let saldo = prompt("Digite su saldo");
alert("Su saldo es de " + saldo + " colones");
let nombre = prompt("Escriba su nombre");
alert("Bienvenido "+nombre);