let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();

    if (amigo) {
        amigos.push(amigo);
        mostrarAmigos();
        console.log(amigos);
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function mostrarAmigos() {
    let elementoHTML = document.getElementById("listaAmigos");
    elementoHTML.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo;
        elementoHTML.appendChild(li);
    });
}