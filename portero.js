function PresionarNumero(valor) {
    let piso = document.getElementById("piso").value;
    let dto = document.getElementById("dto").value;
    if (piso.length < 2) {
        document.getElementById("piso").value = piso.toString() + valor.toString();
    } else {
        if (dto.length < 1) {
            document.getElementById("dto").value = dto.toString() + valor.toString();
        }
    }
}

function BotonLlamar() {
    let botonllamar = document.getElementById("llamar").value;
    let piso = document.getElementById("piso").value;
    let dto = document.getElementById("dto").value;
    if (piso < 48) {
        document.getElementById("piso").value = botonllamar.toString() + " Llamar al piso " + piso.toString();
    } else {
        document.getElementById("piso").value = "El piso no existe";
    }
    if (dto > 0 && dto < 8) {
        document.getElementById("dto").value = botonllamar.toString() + "Departamento " + dto.toString();
    } else {
        document.getElementById("dto").value = "El dto no existe";
    }
}

function BotonBorrar() {
    document.getElementById("piso").value = "";
    document.getElementById("dto").value = "";
}