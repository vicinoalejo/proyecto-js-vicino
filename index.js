//Ingresar nombre del cliente y que me diga que numero de cotizacion es

function inicio(){
    console.log("Cotizador de impresiones 3d");
}

inicio();

function cotizar(){
    let num1=parseInt(prompt("Ingresa precio filamento"));
    let num2=parseInt(prompt("Ingresar peso bobina completa de filament"));
    let num3=parseInt(prompt("Ingresa peso en gramos del producto"));
    let resultado=num1/num2*num3;
    console.log("El precio de costo es: "+resultado+"ARS");
}

cotizar();
