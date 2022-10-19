//Ingresar nombre del cliente

let nomCliente = prompt("***COTIZADOR IMPRESIONES 3D***\n Ingresa nombre de cliente:");

console.log("Cliente: "+nomCliente);


let clientes = "";
for  (let index = 0; index < 1; index++){
    clientes += prompt("Cliente n°: ")+"\n";
}

console.log("Cliente n° "+clientes);
//Ingresamos datos para saber el costo del producto a imprimir

function cotizar(){
    let precioFilamento=parseInt(prompt("Ingresa precio (ARS) del filamento"));
    let pesoBobina=parseInt(prompt("Ingresar peso (g) bobina completa de filamento"));
    let pesoProducto=parseInt(prompt("Ingresa peso en gramos del producto"));
    let resultado=precioFilamento/pesoBobina*pesoProducto;
    console.log("El precio de costo es: "+resultado+" ARS");
}

cotizar();

// COTIZACION A DOLARES 

const COTIZACION_DOLAR = 290;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;

let seleccion = prompt("¿Cotizar el valor en dolares? \n si \n no \n Ingrese si o no segun corresponda");
switch (seleccion){
    case "si":
        let valor = prompt("Ingresar valor en pesos");
        alert("El precio en dolares es: "+cotizarDolar(valor)+" USD");
        break;
    case "no":
        alert("Valor sin cotizar");
        break;
    default:
        break;
}

// CLientes 

class Cliente{
    constructor(nombre, numCliente, numTelefono, empresa){
        this.nombre = nombre;
        this.numCliente = numCliente;
        this.numTelefono = numTelefono;
        this.empresa = empresa;
    }
}

const cliente1 = new Cliente("Guillermo Mercado", "1", "1558471256","Mercado3d");
const cliente2 = new Cliente("Fernando Perez", "2", "1569585472","Perez3d");
const cliente3 = new Cliente("Ivan Lopez", "3", "1532759426","Lopez3d");
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

