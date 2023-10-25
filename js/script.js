alert("ingresa a nuestro portal");

function captura() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nombre === '' || email === '' || password === '') {
        alert("Por favor, complete todos los campos.");
        return;
    }

    alert("Datos enviados: " + nombre + ", " + email,);
}
