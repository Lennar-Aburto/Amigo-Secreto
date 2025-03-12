let amigos = []


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo) {
        amigos.push(amigo);
        mostrarAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function mostrarAmigos() {
    let elementoHTML = document.getElementById("listaAmigos");
    elementoHTML.innerHTML = amigos.join(", ");}