let encriptarObject = document.getElementById("texto-encriptar");
let encriptadoObject = document.getElementById("texto-encriptado");
let contenedorImagen = document.querySelector(".texto");
let copiarMsj = document.querySelector(".btn-copiar");

let letrasCambio = [
    ['e', "enter"],
    ['i', "imes"],
    ['a', "ai"],
    ['o', "ober"],
    ['u', "ufat"]
]


function btnEncriptar(){
    let textoEncriptar = encriptar(encriptarObject.value);
    limpiarArea(textoEncriptar);
    encriptarObject.value="";
    mostrarBtnCopiar(textoEncriptar);
}

function btnDesencriptar(){
    let textoDesencriptado = desencriptar(encriptadoObject.value);
    encriptadoObject.innerHTML = textoDesencriptado;
    encriptarObject.value="";
}


function desencriptar(textoEncriptar){
    for (let i = 0; i < letrasCambio.length; i++) {
        if(textoEncriptar.includes(letrasCambio[i][1])){
            textoEncriptar = textoEncriptar.replaceAll(letrasCambio[i][1], letrasCambio[i][0]);
        }
    }
    return textoEncriptar;
}


function encriptar(textoEncriptar){
    for (let i = 0; i < letrasCambio.length; i++) {
        if(textoEncriptar.includes(letrasCambio[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(letrasCambio[i][0], letrasCambio[i][1]);
        }
    }
    return textoEncriptar;
}

function limpiarArea(textoEncriptar){
    if(textoEncriptar !== ""){
        contenedorImagen.style.display = "none";
        encriptadoObject.innerHTML= textoEncriptar;
    }
}

function mostrarBtnCopiar(textoEncriptar){
    if(textoEncriptar !== ""){
        copiarMsj.style.display = "block";
    }
}

function copiar() {
    let textoEncriptado = document.getElementById("texto-encriptado").value;
    navigator.clipboard.writeText(textoEncriptado)
    alert("Mensaje copiado!")
}