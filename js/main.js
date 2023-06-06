class Alumno {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }
}

const alumnos = [
  new Alumno("Juan", 8),
  new Alumno("Maria", 9),
  new Alumno("Pedro", 7),
  new Alumno("Angel", 5),
  new Alumno("Luis", 4),
  new Alumno("Camila", 10),
  new Alumno("Gonzales", 1),
  new Alumno("Martin", 10),
  new Alumno("Zoe", 4),
  new Alumno("Sofia", 2),
  new Alumno("Candela", 10),
  new Alumno("Agustina", 10),
  new Alumno("Leonel", 9),
  new Alumno("Joaquin", 6),
  new Alumno("Katerin", 5),
];

function filtrarAlumnosPorNorta(notaMinima) {
  return alumnos.filter((alumno) => alumno.nota >= notaMinima);
}

function buscarAlumnoPorNombre(nombre) {
  return alumnos.find((alumno) => alumno.nombre === nombre);
}

const notaBuscada = prompt(
  "Ingrese una nota del 1  al 10 para ver los alumnos que la tienen"
);

if (notaBuscada) {
  const alumnosConNotaBuscada = alumnos.filter(
    (alumno) => alumno.nota === parseFloat(notaBuscada)
  );

  if (alumnosConNotaBuscada.length > 0) {
    alert("Los siguientes alumnos tienen una nota de " + notaBuscada + ":");
    alumnosConNotaBuscada.forEach((alumno) => {
      alert("-") + alumno.nombre + ": " + alumno.nota;
    });
  } else {
    alert("No hay alumnos con una nota de " + notaBuscada + ".");
  }
}

const mostrarAprobados = confirm(
  "¿Quieres saber quienes aprobaron?(Cancelar mostrara solo los desaprobados)"
);

if (mostrarAprobados) {
  const notaAprobacion = 7; //--------aca es la nota minima para aproba---------
  const alumnosAprobados = filtrarAlumnosPorNorta(notaAprobacion);
  if (alumnosAprobados.length > 0) {
    alert("Los siguientes alumnos son los que aprobaron: ");
    alumnosAprobados.forEach((alumno) => {
      alert("- " + alumno.nombre + ": " + alumno.nota);
    });
  } else {
    alert("No hay alumnos que hayan aprobado.");
  }
} else {
  const notaReprobacion = 7; //--------------Nota maxima para desaprobar--------
  const alumnosDesaprobados = alumnos.filter(
    (alumno) => alumno.nota < notaReprobacion
  );
  if (alumnosDesaprobados.length > 0) {
    alert("Los siguientes alumnos desaprobaron: ");
    alumnosDesaprobados.forEach((alumno) => {
      alert("- " + alumno.nombre + ": " + alumnonota);
    });
  } else {
    alert("No hay alumnos que hayan desaprobado");
  }
}
const deseaNotasAltas = confirm(
  "¿Deseas ver las 5 notas mas altas?(Si pone cancelar apareceran las 5 notas mas bajas"
);

let mensaje;
if (deseaNotasAltas) {
  const notasAltas = alumnos
    .filter((alumno) => alumno.nota >= 7)
    .map((alumno) => alumno.nota)
    .sort((a, b) => b - a)
    .slice(0, 5);
  mensaje = "Las 5 notas más altas  son: " + notasAltas.join(", ");
} else {
  const notasBajas = alumnos
    .filter((alumno) => alumno.nota < 7)
    .map((alumno) => alumno.nota)
    .sort((a, b) => a - b)
    .slice(0, 5);
  mensaje = "Las 5 notas más bajas  son: " + notasBajas.join(", ");
}

alert(mensaje);

const deseaDetalle = confirm("¿Deseas ver las notas en detalle?");

if (deseaDetalle) {
  const notasAltas = alumnos
    .filter((alumno) => alumno.nota >= 7)
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 5);

  const notasBajas = alumnos
    .filter((alumno) => alumno.nota < 7)
    .sort((a, b) => a.nota - b.nota)
    .slice(0, 5);

  let mensajeNotasAltas = "Las 5 mejores notas:\n";
  notasAltas.forEach((alumno) => {
    mensajeNotasAltas += `${alumno.nombre}: ${alumno.nota}\n`;
  });

  let mensajeNotasBajas = "Las 5 peores notas:\n";
  notasBajas.forEach((alumno) => {
    mensajeNotasBajas += `${alumno.nombre}: ${alumno.nota}\n`;
  });

  mensaje = mensajeNotasAltas + "\n" + mensajeNotasBajas;
} else {
  const notasAltas = alumnos
    .filter((alumno) => alumno.nota >= 7)
    .map((alumno) => alumno.nota)
    .sort((a, b) => b - a)
    .slice(0, 5);

  const notasBajas = alumnos
    .filter((alumno) => alumno.nota < 7)
    .map((alumno) => alumno.nota)
    .sort((a, b) => a - b)
    .slice(0, 5);

  mensaje =
    "Las 5 notas más altas  son: " +
    notasAltas.join(", ") +
    "\n" +
    "Las 5 notas más bajas son: " +
    notasBajas.join(", ");
}

alert(mensaje);
