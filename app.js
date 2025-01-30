// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; /*Array para almacenar los nombres*/
let input = this.value;
//let mensaje = document.getElementById("mensaje");
let soloLetras = /^[A-Za-zÁáÉéÍíÓóÚúÑñ]*$/;

function agregarAmigo (){
    const inputAmigo = document.getElementById ("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert ("Ingresa un nombre por favor"); /*Validar que el campo no este vacio*/
        return;
    }

    if (!soloLetras.test(nombreAmigo)) {
        alert("Solo se permiten letras.");
        inputAmigo.
        inputAm
        value = ""; /*Borra el contenido inválido*/
        return;
    }

    amigos.push(nombreAmigo); /*S agrega el nombre al array*/

    actualizarLista (); /*Se actualiza la lista*/

    inputAmigo.value = ""; /*Se actualizan los datos de entrada*/
    inputAmigo.focus ();
}

function actualizarLista (){ /*Esta funcion actualiza los datos de entrada*/
    const listaAmigoUl = document.getElementById ("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement ("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild (li);
        
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert ("No hay amigos para sortear, debes agregar nombres de tus amigos"); 
        return;
        }

    const indiceAleatorio = Math.floor(Math.random () * amigos.length); /*Genera un indice aleatorio*/
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById ("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener ('DOMContentLoaded' , () =>{
    document.getElementById("btnAñadir").addEventListener ("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener ("click", sortearAmigo);
});
document.add
