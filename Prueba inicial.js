//Declaración de variables
var nombre="Camilo ";
var apellido="Bedoya";
var nombrecompleto= nombre + apellido
var nickname= "Jucabega27";
var edad = 28;
var correo ="cmailo.bedoya.garcia@gmail.com";
var mayor= true;
var ahorro= 50000000;
var deuda =25000000;
var dinero_real=ahorro-deuda;

console.log(nombrecompleto);
console.log(dinero_real);

//Ejercicio con IF

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion=== "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}

else if (tipoDeSuscripcion=== "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

else if (tipoDeSuscripcion=== "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Ejercicio con while

var i = 0

while (i < 5) {
    i++;
    console.log("El valor de i es: " + i);
   }

   var i = 10

   while (i > 2) {
       i--;
       console.log("El valor de i es: " + i);
      }

//Ejercicio Array

var frutas = [
    {nombre : "Manzana"}, 
    {nombre : "Fresa"}, 
    {nombre : "Papaya"}];



   frutas.forEach(function(fruta){
       console.log(fruta.nombre)
   }) 
    

