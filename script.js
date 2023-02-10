const textoArea = document.querySelector(".texto-Area");
const mensaje = document.querySelector(".mensaje");
const copiar =document.querySelector('.btn-copiar');

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat*/
function btnEncriptado(){
    const textoEncriptado = encriptado(textoArea.value);
    mensaje.value = textoEncriptado;
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.display = 'block';
    
}

function encriptado(scriptEncriptado){
    let  matrisCodigo = [["e" , "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    scriptEncriptado = scriptEncriptado.toLowerCase();

    for(let i = 0; i < matrisCodigo.length; i++ ){

        if(scriptEncriptado.includes(matrisCodigo [i][0])){
            scriptEncriptado = scriptEncriptado.replaceAll(matrisCodigo[i][0],matrisCodigo[i][1])
        }
    }
    return scriptEncriptado;
}

function btnDesencriptado(){
    const textoDesencriptado = desencriptado(textoArea.value);
    mensaje.value = textoDesencriptado;
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.display = 'block';
}

function desencriptado(scriptDesencriptado){
    let  matrisCodigo = [["e" , "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    scriptDesencriptado = scriptDesencriptado.toLowerCase();

    for(let i = 0; i < matrisCodigo.length; i++ ){

        if(scriptDesencriptado.includes(matrisCodigo [i][0])){
            scriptDesencriptado = scriptDesencriptado.replaceAll(matrisCodigo[i][1] , matrisCodigo[i][0]);
        }
    }
    return scriptDesencriptado;
}

function btnCopiar(){
  mensaje.select();
  document.execCommand('copy');
  alert('Mensaje copiado!');
  
}

  

  
