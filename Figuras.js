// //Información cuadrado
// const ladocuadrado=515;

// console.group ("Cuadrado") //Esto es para encerrar los mensajes en uno solo

// console.log("Los lados del cuadrado miden: " + ladocuadrado + " cm");

// var perimetrocuadrado=ladocuadrado*4;
// console.log("El perímetro del cuadrado mide: " + perimetrocuadrado + " cm");

// var areacuadrado=ladocuadrado**2;
// console.log("El área del cuadrado mide: " + areacuadrado +" cm^2");

// console.groupEnd ("Cuadrado") //Siempre que exista un console.group, se debe cerrar con console.groupend

// //Información triángulo
// const ladotriangulo1=4;
// const ladotriangulo2=2;
// const basetriangulo=8;
// const alturatriangulo=6;

// console.group ("Triángulo") //Esto es para encerrar los mensajes en uno solo

// console.log("Los lados del triángulo miden: " 
// + ladotriangulo1 + " cm, " + 
// ladotriangulo2 + " cm, y " 
// + basetriangulo + " cm"
// );

// var perimetrotriangulo=ladotriangulo1+ladotriangulo2+basetriangulo
// console.log("El perímetro del triángulo mide: " + perimetrotriangulo + " cm");

// var areatriangulo=((basetriangulo*alturatriangulo)/2)
// console.log("El área del triángulo mide: " + areatriangulo + " cm^2");

// console.groupEnd ("Triángulo") //Siempre que exista un console.group, se debe cerrar con console.groupend

// //Información círculo
// const radio=3;
// const diametro=6;

// console.group ("Círculo") //Esto es para encerrar los mensajes en uno solo

// console.log("El radio del cículo mide: " 
// + radio + " cm, y el diámetro mide " + 
// diametro + " cm" 
// );

// var perimetrocirculo=diametro*Math.PI 
//   console.log("El perímetro del círculo mide: " + perimetrocirculo + " cm");

// var areacirculo=(radio**2*Math.PI)
// console.log("El área del círculo mide: " + areacirculo + " cm^2");

// console.groupEnd ("Círculo") //Siempre que exista un console.group, se debe cerrar con console.groupend

//Ahora vamos a volverlo dinámico utilizando funciones

//Cuadrado

function perimetrocuadrado(lado){
return lado*4;
}

function calculoperimetrocuadrado(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const input = document.getElementById("inputcuadrado");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const valor = input.value;
//Aquí estamos llamando a la función definida arriba
const perimetro = perimetrocuadrado (valor)
alert (perimetro)
}

function areacuadrado(lado){
    return lado**2;
    }
function calculoareacuadrado(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const input = document.getElementById("inputcuadrado");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const valor = input.value;
//Aquí estamos llamando a la función definida arriba
const area = areacuadrado (valor)
alert (area)
}

//Triángulo

function perimetrotriangulo (lado1, lado2, base){
        return lado1 + lado2 + base;
        }
        
function calculoperimetrotriangulo(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const inputlado1 = document.getElementById("inputtriangulo1");
const inputlado2 = document.getElementById("inputtriangulo2");
const inputbase = document.getElementById("inputtriangulobase");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const lado1 = inputlado1.value;
const lado2 = inputlado2.value;
const valorbase = inputbase.value;
//Aquí estamos llamando a la función definida arriba
const perimetro = perimetrotriangulo (lado1, lado2, valorbase)
alert (perimetro)
}


function areatriangulo(base, altura){
        return (base*altura)/2;
        }

function calculoareatriangulo(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const inputaltura = document.getElementById("inputtrianguloalt");
const inputbase = document.getElementById("inputtriangulobase");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const valoraltura = inputaltura.value;
const valorbase = inputbase.value;
//Aquí estamos llamando a la función definida arriba
const area = areatriangulo (valoraltura, valorbase)
alert (area)
}
        

//Círculo

function diametrocirculo (radio){
return radio
}
        
function calculoperimetrocirculo(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const inputdiametro = document.getElementById("inputdiametro");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const valordiametro = inputdiametro.value;
//Aquí estamos llamando a la función definida arriba
const perimetro = diametrocirculo (valordiametro*Math.PI*2)
alert (perimetro)
}

function calculoareacirculo(){
//Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
const inputdiametro = document.getElementById("inputdiametro");
//Aquí estamos imprimiendo el valor que el usuario da al input que escribió
const valordiametro = inputdiametro.value;
//Aquí estamos llamando a la función definida arriba
const area = diametrocirculo (valordiametro*valordiametro*Math.PI)
alert (area)
}

//Triángulo isósceles

        function alturaiso(lado1,lado2){
                return Math.sqrt ((lado1**2)-((lado2**2/4)))
       }
       
        function calculoaltura (){ 
        const inputaltura1 = document.getElementById("inputaltu1");
        const inputaltura2 = document.getElementById("inputaltu2");
        const valor1=inputaltura1.value
        const valor2=inputaltura2.value


        if (valor1==valor2){ 
        const altura = alturaiso(valor1, valor2)
        alert (altura)
        }

        else { 
        alert("Los lados deben ser iguales")
        }        
}

function perimetrocuadrado(lado){
        return lado*4;
        }
        
        function calculoperimetrocuadrado(){
        //Con esta constante estamos conectando el html y JS. Importante piner el document.getelementbyid
        const input = document.getElementById("inputcuadrado");
        //Aquí estamos imprimiendo el valor que el usuario da al input que escribió
        const valor = input.value;
        //Aquí estamos llamando a la función definida arriba
        const perimetro = perimetrocuadrado (valor)
        alert (perimetro)
        }
        