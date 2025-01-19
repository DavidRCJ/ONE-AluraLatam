function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoUsuario(){
    alert('Clic desde el boton');
}

function nuevoJuego(){
    alert('Clic desde el boton Nuevo');
}

asignarTexto('h1','Juego de numero secreto');
asignarTexto('p','Elige un numero del 1 al 10');