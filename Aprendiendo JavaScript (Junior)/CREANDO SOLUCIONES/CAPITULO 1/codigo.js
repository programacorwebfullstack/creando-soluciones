// creaa una programa que pida al usuario (nombre y notas de los estudiantes), calcule el promedio de las notas y clasifique a los estudiantes segun sus rendimientos...//
alert("Bienvenido al sistema de notas academico, si desea conocer su promedio toque ¡ACEPTAR!")

let nombre = prompt("ingresa tu nombre");

let nota1 = parseFloat (prompt(nombre + "ingrese su nota estudiante 1"));
let nota2 = parseFloat (prompt(nombre + "ingrese su nota estudiante 2"));
let nota3 = parseFloat (prompt(nombre + "ingrese su nota estudiante 3"));
let nota4 = parseFloat (prompt(nombre + "ingrese su nota estudiante 4"));
let nota5 = parseFloat (prompt(nombre + "ingrese su nota estudiante 5"));
let nota6 = parseFloat (prompt(nombre + "ingrese su nota estudiante 6"));

alert("Ahora visualizara su promedio estudiante");


let promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 ) / 6; 
document.write(promedio + "<br>");

let clasificacion_estudiante;
  if(promedio >=50){
    clasificacion_estudiante = "ALTO"
    alert ("su promedio es alto");
  }
  else if(promedio >=40){
    clasificacion_estudiante = "MEDIO ALTO"
    alert ("su promedio es meido alto");
  }
  else if(promedio >=30){
    clasificacion_estudiante = "MEDIO"
    alert  ("su promedio es medio");
  }
  else if(promedio >=20){
    clasificacion_estudiante = "MEDIO BAJO"
    alert  ("su promedio es medio bajo");
  }
  else if(promedio >=10){
    clasificacion_estudiante = "BAJO"
    alert  ("su promedio es bajo");
  }
  
  document.write("Nombre del estudiante: " + nombre + "<br>");
  document.write("promedio estudiante: " + promedio.toFixed(2) + "<br>");
  document.write("clasificacion estudiante: " + clasificacion_estudiante + "<br>");
  


    
























