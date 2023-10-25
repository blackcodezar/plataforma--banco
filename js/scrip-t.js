var boton = document.getElementById('boton');

function esconder() {
    var menu = document.getElementById('opcs-menu');
    if (menu.classList.contains("dis")) {
        console.log("Mostrar");
        menu.classList.remove("dis");
        menu.classList.add("mostrar");
    } else {
        console.log("Ocultar");
        menu.classList.remove("mostrar");
        menu.classList.add("dis");
    }
}

boton.addEventListener("click", esconder);