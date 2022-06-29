//Calculando promedio

function calcular_promedio(lista){

//Se deja la variable que empiece en 0 para que se vaya sumando
var sumalista=0
//Este contador lo que hace es que empieza desde el primer dato del array y el i++ va sumando los i
for (i=0; i<lista.length ;i++){
//Con la posición [i] va sumando el ciclo
sumalista=sumalista+lista[i]
}
//Así es como se saca el promedio
var promediosalario=sumalista/lista.length
return promediosalario
}



//Calculando mediana

//Se debe validar primero si la lista es par o impar para calcular la mediana

function mediana(lista){
//Con esta función estamos asegurando el ordenar de menor a mayor la lista
lista.sort(function (a,b){return a-b})    
//El parseint es para que el código devuelva un valor entero 
var mitad_lista= parseInt(lista.length/2);
    if ((lista.length % 2) === 0){
        var lista1 = lista[mitad_lista];
        var lista2 = lista[mitad_lista-1];
;        mediana1=(lista1+lista2)/2;
        return mediana1; }

    else
 {
        mediana2=lista[mitad_lista];
        return mediana2;
    }
}
