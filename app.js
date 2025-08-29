// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Ingresar nombre de varios amigos y luego realizar un sorteo aleatorio para determinar quién es el amigo secreto.
//La aplicación debe permitir que se agreguen nombres a través de un campo de texto y apretando el botón añadir
//Si un usuario intena ingresar un nombre vacío deberá aparecer una alerta indicando que debe ingresarse un nombre válido
//Al apretar el botón añadir amigo, la app deberá escoger un nombre aleatorio y mostrarlo en pantalla.
        //Agregar nombres, Validar entrada, Visualizar lista, Sorteo aleatorio. 

console.log("Hola!");

function asignarTextoElemento(elemento, texto){
    var elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return;
}

asignarTextoElemento('h1', '¡Juego del Amigo Secreto!');
const listaAmigos = [];

function condicionesIniciales(){
    vaciarCaja();
}

function vaciarCaja(){
    const input = document.getElementById('amigo')
    input.value = "";
    input.focus();
}

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); //.trim elimina los espacion al principio y al final.
    const regex = /^[a-zA-Z0 ]+$/; //esta constante contiene los caracteres válidos para nuestros nombres, la usaremos más adelante para la verificación.
    //Si se trata de ingresar un espacio vacío, alertará al usuario.
    if (nombre === ""){
        alert("El nombre está vacío. Por favor, ingresa un nombre válido.");
        vaciarCaja();
        return;
    }
    //El siguiente if es para la verificación de caracteres válidos
    if(!regex.test(nombre)){
        alert("El nombre no puede contener caracteres especiales. Por favor, ingresa un nombre válido");
        vaciarCaja();
        return;
    }

    listaAmigos.push(nombre)
    actualizarLista();
    vaciarCaja();
   return;
}

function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    if (listaAmigos.length > 0) {
        listaAmigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    } else {
        //En caso que no haya nombres
        const li = document.createElement('li');
        li.textContent = "No hay amigos agregados todavía.";
        lista.appendChild(li);
    
    }   
}

function sortearAmigo(){
        if (listaAmigos.length < 2) { 
        alert('Se necesita dos nombres o más para realizar el sorteo');
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
    console.log(numeroSorteado);
    let amigoSorteado = listaAmigos[numeroSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.textContent = (`tu amigo secreto es: ${amigoSorteado}`);   
}
//Estoy pensando si con la tecla Enter podríamos activar ya sea la función de agregar amigo o sertearlo, Creo que agregarlo es más viable para no sortear amigos sin querer.
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo(); //Si es Enter se ejecutará la función
    }
});