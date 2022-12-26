function encriptar(){
    var texto = document.getElementById("input-texto").value;
    //i es para que afecte tanto mayuscula como minuscula
    //m es para que afecte a multiples lineas o parrafos
    //g es para toda la linea u oracion
    var textocifrado = texto.replace(/e/img,"enter");
    var textocifrado = textocifrado.replace(/o/img,"ober");
    var textocifrado = textocifrado.replace(/i/img,"imes");
    var textocifrado = textocifrado.replace(/a/img,"ai");
    var textocifrado = textocifrado.replace(/u/img,"ufat");

    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textocifrado;
    document.getElementById("copiar").display = "show";
    document.getElementById("copiar").display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-texto").value;
    //i es para que afecte tanto mayuscula como minuscula
    //m es para que afecte a multiples lineas o parrafos
    //g es para toda la linea u oracion
    var textocifrado = texto.replace(/enter/img,"e");
    var textocifrado = textocifrado.replace(/ober/img,"o");
    var textocifrado = textocifrado.replace(/imes/img,"i");
    var textocifrado = textocifrado.replace(/ai/img,"a");
    var textocifrado = textocifrado.replace(/ufat/img,"u");

    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textocifrado;
    document.getElementById("copiar").display = "show";
    document.getElementById("copiar").display = "inherit";
}

function copy1(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value)
    alert("copiado")
}