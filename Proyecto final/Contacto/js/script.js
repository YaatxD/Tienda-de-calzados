function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;
}
