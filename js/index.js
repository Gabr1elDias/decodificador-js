var btnCriptografar = document.querySelector(".btnCriptografar");
var btnDescriptografar = document.querySelector(".btnDescriptografar");
var imagemPessoa = document.querySelector(".imagemPessoa")
var paragrafo = document.querySelector(".paragrafo")
var resultado = document.querySelector(".textoResultado")

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

function criptografar(){
    ocultar();
    var campoTexto = recuperarTexto()
    resultado.textContent = criptografarTexto(campoTexto);
}

function descriptografar(){
    ocultar();
    var campoTexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(campoTexto);
}

function recuperarTexto(){
    var campoTexto = document.querySelector(".campoTexto");
    return campoTexto.value
}

function ocultar(){
    imagemPessoa.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

function descriptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btnCopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("ok"); 
})