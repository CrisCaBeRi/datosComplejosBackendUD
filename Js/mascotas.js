/* let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody"); //Consultar un hijo del selector llamado */
//console.log(cuerpoTabla);
/* //!USANDO LISTAS
let nombeMascotas = ["Luna", "Lucas", "Oreo"];
let nombreDueno = ["Ana", "Daniel", "Juan"];
let cedulaDueno = ["1234567", "51834967", "89526325"];
let edadMascota = ["5 años", "1 año", "2 años"];
let telDueno = ["3125679852", "3221456289", "3214567891"];
let especialidad = [
  "Veterinaria Conductual",
  "Medicina General",
  "Cirugía veterniaria",
];
let medico = ["Jorge", "Daniela", "Kevin"];

for (let i = 0; i < nombeMascotas.length; i++) {
  let fila = cuerpoTabla.insertRow(); //insertar fila TR . insertRow
  //Insertar columna  TD .insertcell
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueno = fila.insertCell();
  let celdaCedulaDueno = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueno = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();
  //Rellenar contenidos con cada iteración
  celdaNombreMascota.textContent = nombeMascotas[i];
  celdaNombreDueno.textContent = nombreDueno[i];
  celdaCedulaDueno.textContent = cedulaDueno[i];
  celdaEdadMascota.textContent = edadMascota[i];
  celdaTelefonoDueno.textContent = telDueno[i];
  celdaEspecialidad.textContent = especialidad[i];
  celdaMedico.textContent = medico[i];
}

//!USANDO OBJETOS
let mascotas = [
  {
    nombreMascota: "Luna",
    nombreDueño: "Ana",
    cedulaDueño: "1234567",
    edadMascota: "5 años",
    telefonoDueño: "3105678946",
    especialidad: "Veterinaria Conductual",
    medico: "Jorge",
  },
  {
    nombreMascota: "Orion",
    nombreDueño: "Jorge",
    cedulaDueño: "6789015",
    edadMascota: "2 meses",
    telefonoDueño: "12345678909",
    especialidad: "Medicina interna",
    medico: "Daniela",
  },
  {
    nombreMascota: "Maily",
    nombreDueño: "Kevin",
    cedulaDueño: "5678954",
    edadMascota: "2 años",
    telefonoDueño: "5678902567",
    especialidad: "Dermatología veterinaria",
    medico: "Andres",
  },
  {
    nombreMascota: "Mystic",
    nombreDueño: "Nicolas",
    cedulaDueño: "56723982",
    edadMascota: "8 años",
    telefonoDueño: "5678952567",
    especialidad: "Farmacología veterinaria",
    medico: "Jeisson",
  },
];
for (let i = 0; i < mascotas.length; i++) {
  let mascota = mascotas[i]; //Traemos cada objeto de cada posicion dentro del array y se almacenan en la variable mascota.
  //console.log(mascota);
  //Se crea la fila y columnas
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();
  //Se rellenan las celdas con las propiedades de cada objeto sustraido con la variable mascota
  celdaNombreMascota.textContent = mascota.nombreMascota;
  celdaNombreDueño.textContent = mascota.nombreDueño;
  celdaCedulaDueño.textContent = mascota.cedulaDueño;
  celdaEdadMascota.textContent = mascota.edadMascota;
  celdaTelefonoDueño.textContent = mascota.telefonoDueño;
  celdaEspecialidad.textContent = mascota.especialidad;
  celdaMedico.textContent = mascota.medico;
}

//!USANDO CLASES
class Mascota {
  constructor(
    nombreMascota,
    nombreDueno,
    cedulaDueno,
    edadMascota,
    telefonoDueno,
    especialidad,
    medico
  ) {
    this.nombreMascota = nombreMascota;
    this.nombreDueño = nombreDueno;
    this.cedulaDueño = cedulaDueno;
    this.edadMascota = edadMascota;
    this.telefonoDueño = telefonoDueno;
    this.especialidad = especialidad;
    this.medico = medico;
  }
}

let mascota1 = new Mascota(
  "Luna",
  "Ana",
  "56723982",
  "6 años",
  "5675658567",
  "Farmacología veterinaria",
  "Juan"
);
let mascota2 = new Mascota(
  "Mystic",
  "Charlie",
  "567235896",
  "7 años",
  "5678952567",
  "Farmacología veterinaria",
  "Daniel"
);
let mascota3 = new Mascota(
  "Negro",
  "Sebastián",
  "56722569",
  "5 años",
  "5678952567",
  "Farmacología veterinaria",
  "Sandra"
);
//Arreglo para iterar
let listaMascotas = [mascota1, mascota2, mascota3];

for (let i = 0; i < listaMascotas.length; i++) {
  let mascota = listaMascotas[i]; //Traemos cada objeto de cada posicion dentro del array y se almacenan en la variable mascota.
  //console.log(mascota);
  //Se crea la fila y columnas
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();
  //Se rellenan las celdas con las propiedades de cada objeto sustraido con la variable mascota
  celdaNombreMascota.textContent = mascota.nombreMascota;
  celdaNombreDueño.textContent = mascota.nombreDueño;
  celdaCedulaDueño.textContent = mascota.cedulaDueño;
  celdaEdadMascota.textContent = mascota.edadMascota;
  celdaTelefonoDueño.textContent = mascota.telefonoDueño;
  celdaEspecialidad.textContent = mascota.especialidad;
  celdaMedico.textContent = mascota.medico;
}

//!CONSUMO DE UN JSON
fetch(`../data/datos_mascotas.json`) //Solicitud a URL local o externa
  .then((Response) => Response.json()) //respuesta y conversión a json
  .then((data) => {
    //data = objeto convertido ⏫

    for (let i = 0; i < data.length; i++) {
      let mascota = data[i]; //Traemos cada objeto de cada posicion dentro del array y se almacenan en la variable mascota.

      //Se crea la fila y columnas
      let fila = cuerpoTabla.insertRow();
      let celdaNombreMascota = fila.insertCell();
      let celdaNombreDueño = fila.insertCell();
      let celdaCedulaDueño = fila.insertCell();
      let celdaEdadMascota = fila.insertCell();
      let celdaTelefonoDueño = fila.insertCell();
      let celdaEspecialidad = fila.insertCell();
      let celdaMedico = fila.insertCell();
      //Se rellenan las celdas con las propiedades de cada objeto sustraido con la variable mascota
      celdaNombreMascota.textContent = mascota.nombreMascota;
      celdaNombreDueño.textContent = mascota.nombreDueño;
      celdaCedulaDueño.textContent = mascota.cedulaDueño;
      celdaEdadMascota.textContent = mascota.edadMascota;
      celdaTelefonoDueño.textContent = mascota.telefonoDueño;
      celdaEspecialidad.textContent = mascota.especialidad;
      celdaMedico.textContent = mascota.medico;
    }
  })
  .catch((error) => console.log("error")); //control de errores */

//! Usando una cookie
let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody");
const mascotasCookie = JSON.parse(obtenerCookies("mascotas"))


for (let i = 0; i < mascotasCookie.length; i++) {
  let mascota = mascotasCookie[i]; 
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();
  celdaNombreMascota.textContent = mascota.nombreMascota;
  celdaNombreDueño.textContent = mascota.nombreDueño;
  celdaCedulaDueño.textContent = mascota.cedulaDueño;
  celdaEdadMascota.textContent = mascota.edadMascota;
  celdaTelefonoDueño.textContent = mascota.telefonoDueño;
  celdaEspecialidad.textContent = mascota.especialidad;
  celdaMedico.textContent = mascota.medico;  
}


function obtenerCookies(nombre) {
  const cookies = document.cookie.split("; "); 
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("="); 
    if (cookie[0] === nombre) {
      return decodeURIComponent(cookie[1]);      
    }   
  }
  return "";
}