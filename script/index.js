function calcularIMC() {
    let mensagens = document.getElementById("mensagens");
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura * altura);
    
    if (imc < 18.5) {
        mensagens.innerText="Baixo Peso";
        } else if (imc < 24.9){
        mensagens.innerText="Peso normal";
        } else if (imc < 29.9){             
        mensagens.innerText="Sobrepeso";   
        } else if (imc < 39.9){
        mensagens.innerText="Obesidade";          
        } else if (imc > 39.9){
        mensagens.innerText="Obesidade mórbida";
        }
}

function redefinir () {
    let apagar = document.getElementById("apagar");
    altura.value = {}
}