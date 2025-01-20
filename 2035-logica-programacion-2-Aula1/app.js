
let numSecreto =0;
let counterIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntentoUsuario(){
    let numUsuario = document.getElementById('numUsuarioHTML').value;
   
    if( numSecreto == numUsuario){
        asignarTexto('p',`Es correcto acertaste en ${counterIntentos} ${
            (counterIntentos == 1) ? 'intento':'intentos' }`);
             document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numUsuario > numSecreto){
            asignarTexto('p','El nuemro secreto es menor');
        }else{
            asignarTexto('p','El nuemro secreto es mayor');
        }
        counterIntentos++;
        clearCasilla();
    }
    return;
}

function clearCasilla(){
    //let valorCell = document.querySelector('#numUsuario');
    //valorCell.value='';
    document.querySelector('#numUsuarioHTML').value = '';
    
}

function randonNumber(){

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return randonNumber();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexto('h1','Juego de numero secreto');
    asignarTexto('p','Elige un numero del 1 al 10');
    numSecreto = randonNumber();
    console.log(numSecreto);
    counterIntentos = 1;
}

function nuevoJuego(){
    clearCasilla();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/