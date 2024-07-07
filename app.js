//Aqui estamos declarando que numero secreto es igual que generar numero secreto
//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto = 0;
//let intentos = 1 ;
let intentos = 0; 
let listaNumerosSorteados = []; 
let numeroMaximo = 10;
//onsole.log(numeroSecreto);


// NOTA: Asegúrate de asignar un atributo antes de seguir estos pasos
// 1. Con 'document' accedemos a elementos del HTML.
// 2. Con 'querySelector' seleccionamos el elemento HTML deseado, utilizando el selector "h1" para un título de nivel 1.
// 3. Luego, utilizamos una variable para almacenar este elemento seleccionado.
// 4. Finalmente, usamos 'innerHTML' para cambiar el contenido HTML del elemento seleccionado y asignarle un nuevo texto.
/*
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";
*/

function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // Selecciona el elemento HTML usando el selector proporcionado
    elementoHTML.innerHTML = texto; // Asigna el texto al contenido HTML del elemento seleccionado
    return;
}




//Creando la funcion verificar intento 
function verificarIntento(){
    //creando la variable nombre de usuario, llamamos un elemnto del html con document pero esta vez solo su id "valor Usuario"
    //.value es necesario para acceder al contenido ingresado por el usuario 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*
    //verificando en la consola que el numero de usuario y numero secreto sean diferentes asi mismos que sean valores number
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
      console.log(numeroDeUsuario === numeroSecreto);
    */
   //console.log(numeroSecreto);
   //console.log(intentos);
   if (numeroDeUsuario === numeroSecreto) {
    AsignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'} `);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
    if(numeroDeUsuario > numeroSecreto){
        AsignarTextoElemento('p','el numero secreto es menor');
    }else{
        AsignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();

   }
    return;
}
//version 1 creamos una funcion llamado limpiar caja que limpiara el valor introducido en la caja de texto
function limpiarCaja(){
    /*
    //creamos una variable llamado valor caja, ubicamos el iD de elemento #valorUsuario
   let valorCaja = document.querySelector('#valorUsuario');
   //decimos que valor de la caja es vacio
    valorCaja.value = ''; 
    */
   //Version 2:aqui direcramente decimos que ubique la caja en el html por su Id y que su valor es vacio
   document.querySelector('#valorUsuario').value='';
}



//Entonces como numero secreto es igual a generar numero secreto.Solo declaro la funcion numero secreto
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        AsignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    // Ejemplos de uso:
AsignarTextoElemento('h1', 'Juego del número secreto'); // Asigna "Juego del número secreto" al contenido de <h1>
AsignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
console.log(numeroSecreto);

}



function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de interbalo de numero
    //generar el numero aleatorio
   condicionesIniciales();
    //deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();