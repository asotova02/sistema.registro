// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Obtener el valor correcto

    if (nombre !== '') { // Validar que no esté vacío
        amigos.push(nombre);
        inputAmigo.value = ''; // Limpiar el campo de entrada
        actualizarLista(); // Llamar a la función para actualizar la lista
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos en la lista
        alert('No hay amigos disponibles para seleccionar, por favor inserte un nombre.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `Amigo seleccionado: ${amigoSeleccionado}`;
}

