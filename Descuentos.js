function calcularpreciodescuento(precio,descuento){
 return precio*((100-descuento)/100)
 }

// //También se podría escribir así, sin embargo no es la mejor forma de hacerlo

// function calculoprecio(precio, descuento){
// return (precio*(100-descuento))/100
// }

function aplicar_descuento(){ 
var descuento_aplicar = document.getElementById("inpcupon")
var descuento_total=descuento_aplicar.value
var valor_productico = document.getElementById("valor_producto")
var valor=valor_productico.value

if (descuento_total == "juan_bedoya") {
    var descuento=10
    const valor_pagar = calcularpreciodescuento(valor, descuento)
    //Así es como se gestiona para que desde JS se sobreescriba el HTML (en HTML está el id que pusimos (parrafo_precio))
    var texto_precio=document.getElementById("parrafo_precio")
    texto_precio.innerText="El precio con el descuento son: $" + valor_pagar
    }
    else if (descuento_total == "claudia_castro") {
            var descuento=15
            const valor_pagar = calcularpreciodescuento(valor, descuento)
            //Así es como se gestiona para que desde JS se sobreescriba el HTML (en HTML está el id que pusimos (parrafo_precio))
            var texto_precio=document.getElementById("parrafo_precio")
            texto_precio.innerText="El precio con el descuento son: $" + valor_pagar
    }
    else if (descuento_total == "hijas_hermosas") {
        var descuento=20
        const valor_pagar = calcularpreciodescuento(valor, descuento)
        //Así es como se gestiona para que desde JS se sobreescriba el HTML (en HTML está el id que pusimos (parrafo_precio))
        var texto_precio=document.getElementById("parrafo_precio")
        texto_precio.innerText="El precio con el descuento son: $" + valor_pagar
}
   else {
       alert ("Escoja un cupón válido")
   }
            }

