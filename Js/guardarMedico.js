const formularioMedicos = document.getElementById("registro-medicos-form");

formularioMedicos.addEventListener("submit", (event) => {
  event.preventDefault();
  const datosMedico = {
    nombreMedico: document.getElementById("nombre").value,
    apellidoMedico: document.getElementById("apellido").value,
    consultorioMedico: document.getElementById("consultorio").value,
    telefonoMedico: document.getElementById("telefono").value,
    correoMedico: document.getElementById("correo").value,
    especialidadMedico: document.getElementById("especialidad").value,
    cedulaMedico: document.getElementById("cedula").value,
  };  
  guardarCookies(datosMedico);
});


function guardarCookies(medico) {
    //las cookies antiguas
    let datos = obtenerCookie("medicos"); //traer el nombre de la cookie
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    let medicosObjetos = []
    medicosObjetos = JSON.parse(datos);
    
    medicosObjetos.push(medico);
    const jsonDatos = JSON.stringify(medicosObjetos)
    cambiarCookie("medicos", jsonDatos)

}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

function cambiarCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}