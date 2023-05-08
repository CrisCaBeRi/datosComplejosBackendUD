//! USO LISTAS 
/* //Extración de los elementos de la tabala
let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");

//Variables unicas para cada arreglo
let nombreDoctor = ["Daniel"];
let apellidoDoctor = ["Bejarano"];
let cedulaDoctor = ["1022589632"];
let especialidadDoctor = ["Odontología veterinaria"];
let consultorioDoctor = ["5"];
let emailDoctor = ["bejaranito@gmail.com"];
let numPacientesDoctor = ["5"];

for (let i = 0; i < nombreDoctor.length; i++) {
  //Se establece una fila
  let fila = cuerpoTabla.insertRow();
  //Se establecen los campos de columnas
  let celdaNombre = fila.insertCell();
  let celdaApellido = fila.insertCell();
  let celdaCedula = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaEmail = fila.insertCell();
  let celdaNumPacientes = fila.insertCell();
  //Se llenan las columnas
  celdaNombre.textContent = nombreDoctor[i];
  celdaApellido.textContent = apellidoDoctor[i];
  celdaCedula.textContent = cedulaDoctor[i];
  celdaEspecialidad.textContent = especialidadDoctor[i];
  celdaConsultorio.textContent = consultorioDoctor[i];
  celdaEmail.textContent = emailDoctor[i];
  celdaNumPacientes.textContent = numPacientesDoctor[i];
} */

//!USO DE OBJETOS
/*let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");
//Lista que lamacena los datos para ser recorridos | esta lista también se utiliza para recorrer los objetos creados con la clase.
const medicos = [
  {
    nombreDoctor: "Juan",
    apellidoDoctor: "Oviedo",
    cedulaDoctor: "10258963256",
    especialidadDoctor: "Medicina general",
    consultorioDoctor: "1",
    emailDoctor: "juanito@gmail.com",
    numPacientesDoctor: "2",
  },
  {
    nombreDoctor: "Felipe",
    apellidoDoctor: "Gonzales",
    cedulaDoctor: "1056895235",
    especialidadDoctor: "Medicina interna",
    consultorioDoctor: "2",
    emailDoctor: "pipelon@gmail.com",
    numPacientesDoctor: "10",
  },
  {
    nombreDoctor: "Andrés",
    apellidoDoctor: "Ramírez",
    cedulaDoctor: "51258963",
    especialidadDoctor: "Dermatología veterinaria",
    consultorioDoctor: "3",
    emailDoctor: "andy@gmail.com",
    numPacientesDoctor: "3",
  },
]; */

//!USO DE CLASES
/* 
let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");

class Medico {
  constructor(
    nombreDoctor,
    apellidoDoctor,
    cedulaDoctor,
    especialidadDoctor,
    consultorioDoctor,
    emailDoctor,
    numPacientesDoctor
  ) {
    (this.nombreDoctor = nombreDoctor),
      (this.apellidoDoctor = apellidoDoctor),
      (this.cedulaDoctor = cedulaDoctor),
      (this.especialidadDoctor = especialidadDoctor),
      (this.consultorioDoctor = consultorioDoctor),
      (this.emailDoctor = emailDoctor),
      (this.numPacientesDoctor = numPacientesDoctor);
  }
}

let medico1 = new Medico(
  "Cristian",
  "Betancourt",
  "1021012456",
  "Cirugía veterinaria",
  "6",
  "camilo@gmail.com",
  "6"
);
let medico2 = new Medico(
  "Kevin",
  "Duran",
  "102589632",
  "Odontología veterinaria",
  "9",
  "kevincito@gmail.com",
  "8"
);

//let medicosList = [medico1, medico2];
medicos.push(medico1, medico2); //? Método que se utiliza para introducir elementos dentro de un arreglo. Se envian los dos objetos creados por las clases al arreglo que almacena los objetos 🔝, cuando se recorre el arreglo, ya cuenta con las clases.

for (let i = 0; i < medicos.length; i++) {
  let med = medicos[i]; //Asignación de variable a  posicion del array - objeto para consultar propiedades.
  //Se establece una fila
  let fila = cuerpoTabla.insertRow();
  //Se establecen los campos de columnas
  let celdaNombre = fila.insertCell();
  let celdaApellido = fila.insertCell();
  let celdaCedula = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaEmail = fila.insertCell();
  let celdaNumPacientes = fila.insertCell();
  //Se llenan las columnas
  celdaNombre.textContent = med.nombreDoctor;
  celdaApellido.textContent = med.apellidoDoctor;
  celdaCedula.textContent = med.cedulaDoctor;
  celdaEspecialidad.textContent = med.especialidadDoctor;
  celdaConsultorio.textContent = med.consultorioDoctor;
  celdaEmail.textContent = med.emailDoctor;
  celdaNumPacientes.textContent = med.numPacientesDoctor;
} */

//! CONSUMO DE JSON
/* 
let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");

fetch('../data/datos_medicos.json')
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let med = data[i]; //Asignación de variable a  posicion del array - objeto para consultar propiedades.
      //Se establece una fila
      let fila = cuerpoTabla.insertRow();
      //Se establecen los campos de columnas
      let celdaNombre = fila.insertCell();
      let celdaApellido = fila.insertCell();
      let celdaCedula = fila.insertCell();
      let celdaEspecialidad = fila.insertCell();
      let celdaConsultorio = fila.insertCell();
      let celdaEmail = fila.insertCell();
      let celdaNumPacientes = fila.insertCell();
      //Se llenan las columnas
      celdaNombre.textContent = med.nombreDoctor;
      celdaApellido.textContent = med.apellidoDoctor;
      celdaCedula.textContent = med.cedulaDoctor;
      celdaEspecialidad.textContent = med.especialidadDoctor;
      celdaConsultorio.textContent = med.consultorioDoctor;
      celdaEmail.textContent = med.emailDoctor;
      celdaNumPacientes.textContent = med.numPacientesDoctor;
    }
  }).catch(error => console.log("error")); //control de errores 
  */


  //! Uso de cookies 

const tablaMedicos = document.getElementById("tabla-medicos");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

const medicosCookie = JSON.parse(obtenerCookie("medicos"))

for(let i=0; i< medicosCookie.length; i++){
  let med = medicosCookie[i]; //Asignación de variable a  posicion del array - objeto para consultar propiedades.
  //Se establece una fila
  console.log(med)
  let fila = cuerpoTabla.insertRow();
  //Se establecen los campos de columnas
  let celdaNombre = fila.insertCell();
  let celdaApellido = fila.insertCell();
  let celdaCedula = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaEmail = fila.insertCell();
  let celdaTelefono = fila.insertCell();
  let celdaNumPacientes = fila.insertCell();
  //Se llenan las columnas
  celdaNombre.textContent = med.nombreMedico;
  celdaApellido.textContent = med.apellidoMedico;
  celdaCedula.textContent = med.cedulaMedico;
  celdaEspecialidad.textContent = med.especialidadMedico;
  celdaConsultorio.textContent = med.consultorioMedico;
  celdaEmail.textContent = med.correoMedico;
  celdaTelefono.textContent = med.telefonoMedico
  celdaNumPacientes.textContent = med.numPacientesMedico;
}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ")
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}