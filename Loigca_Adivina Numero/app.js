alert("Bienvenido al juego del número secreto");
let intento = 0;
let numeroSecreto = 4;
let contador= 1;

//ciclo
while(intento != numeroSecreto){
    // Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
    intento = prompt("Me proposcionas un numero entre 1 y 10 ");
    console.log(intento);

    if (intento == numeroSecreto) {
        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        //console.log("Valor del número secreto:", numeroSecreto);
        alert(`Acertaste el numero secreto es  ` + numeroSecreto +`  Numero de intentos ` + contador );
    } else {
        if(intento > numeroSecreto)
            alert("El numero secrerto es menor");
        else {
            alert("El numero secrerto es mayor");
        }
        contador= contador +1;
    } 
}