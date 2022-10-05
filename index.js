//Ingresar nombre del cliente

let nomCliente = prompt("***COTIZADOR IMPRESIONES 3D***\n Ingresa nombre de cliente:");

console.log("Cliente: "+nomCliente);

//Ingresamos datos para saber el costo del producto a imprimir

function cotizar(){
    let num1=parseInt(prompt("Ingresa precio (ARS) del filamento"));
    let num2=parseInt(prompt("Ingresar peso (g) bobina completa de filamento"));
    let num3=parseInt(prompt("Ingresa peso en gramos del producto"));
    let resultado=num1/num2*num3;
    console.log("El precio de costo es: "+resultado+" ARS");
}

cotizar();




