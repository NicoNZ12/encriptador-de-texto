let msjParaEncriptar = document.getElementById("texto-encriptar");
let msjEncriptado = document.getElementById("texto-encriptado");
let contenedorImagen = document.querySelector(".texto");
let msjAdvertencia = document.getElementById("advertencia");
let copiarMsj = document.getElementById("btn-copiar");



//Array con los cambios de caracteres
let letrasCambio = [
    ['e', "enter"],
    ['i', "imes"],
    ['a', "ai"],
    ['o', "ober"],
    ['u', "ufat"]
]

//funcionalidad del boton encriptar
function btnEncriptar(){
    let textoEncriptar = msjParaEncriptar.value;
    let mensajeEncriptado = encriptar(textoEncriptar);
    verificarMsj(mensajeEncriptado);
}

//funcion para verificar que no haya mayusculas ni acentos
function verificarMsj(mensaje) {
    let contieneMayusculas = /[A-Z]/.test(mensaje);
    let contieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(mensaje)

    if (contieneMayusculas || contieneAcentos) {
        msjAdvertencia.classList.add("advertencia");
        limpiarValores();
        
    } else {
        msjAdvertencia.classList.remove("advertencia");
        mostrarMsj(mensaje);
        
    }
    return mensaje;
}

//funcion para encriptar el mensaje
function encriptar(mensaje){
    for(let i = 0; i < letrasCambio.length; i++){
        if(mensaje.includes(letrasCambio[i][0])){
            mensaje = mensaje.replaceAll(letrasCambio[i][0], letrasCambio[i][1])
        }
    }
    return mensaje;
}

//funcion para mostrar el mensaje encriptado
function mostrarMsj(mensaje){
    if(mensaje !== ""){
        contenedorImagen.style.display = "none";
        msjEncriptado.innerHTML= mensaje;
        mostrarBtnCopiar(mensaje);
    }
}

//funcion que muestra el boton copiar cuando se encripta un mensaje
function mostrarBtnCopiar(mensaje){
    if(mensaje !== ""){
        copiarMsj.style.display = "block";
    }
}

//funcion que copia el mensaje encriptado en el portapapeles
function copiar() {
    let textoEncriptado = document.getElementById("texto-encriptado").value;
    navigator.clipboard.writeText(textoEncriptado)
    alert("Mensaje copiado!")
    limpiarValores();
}

//funcion que vuelve los valores al estado original
function limpiarValores(){
    copiarMsj.style.display = "none";
    msjEncriptado.innerHTML = "";
    contenedorImagen.style.display = "block";
    msjParaEncriptar.value = "";
}
