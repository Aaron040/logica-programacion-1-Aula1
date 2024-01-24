//alert('Hola'); //Mostrar en pantalla
let numSecreto = 8;
let numUser = prompt("Ingrese un numero: ");//Pedir datos
console.log(numUser);
while(numUser != numSecreto){
    if(numUser == numSecreto){
        alert(`Acertaste, el numero es: ${numUser}`);
    }
    else{
        if(numUser < numSecreto){
            alert("Numero es mayor");
        }
        else if(numUser > numSecreto){
            alert("Numero es menor");
        }
    }
}

