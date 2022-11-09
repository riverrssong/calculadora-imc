function calcularIMC() {
    let mensagens = document.getElementById("mensagens");
    let masculino = (document.getElementById("masculino").value);
    let feminino = (document.getElementById("feminino").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura * altura);

    if (masculino (imc < 18.5)) {
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
    else (imc < 19.5); {
        mensagens.innerText="Baixo Peso";
        } else if (imc < 25.8){
        mensagens.innerText="Peso normal";
        } else if (imc < 27.3){             
        mensagens.innerText="Sobrepeso";   
        } else if (imc < 32.3){
        mensagens.innerText="Obesidade";          
        } else if (imc > 32.4){
        mensagens.innerText="Obesidade mórbida";
        }
}

//function redefinir () {
    //let apagar = document.getElementById("apagar");
    //altura.value = {}}