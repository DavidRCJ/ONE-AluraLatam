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
        if(contador > 3){
            alert("Lllegate al nuemro maximo de intentos");
            break;
        }
    }    
}

/*
//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/