function imc(event){
    event.preventDefault();
    var altura = parseFloat(document.getElementById('altura').value);    
    var peso = parseFloat(document.getElementById('peso').value);
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block"; 
    var imc = peso / (altura*altura);
    imc = imc.toFixed(2);
    if(imc <18.50){
        resposta.innerHTML = "IMC: " +imc+ "<br>Abaixo do peso.";
    }else if(imc>=18.50 && imc<=24.90){
        resposta.innerHTML = "IMC: " +imc+ "<br>Peso normal.";
    }else if(imc>24.90 && imc<=29.90){
        resposta.innerHTML = "IMC: " +imc+ "<br>Sobrepeso.";
    }else if(imc>29.90 && imc<=34.90){
        resposta.innerHTML = "IMC: " +imc+ "<br>Obesidade de grau I.";
    }else if(imc>34.90 && imc<=39.90){
        resposta.innerHTML = "IMC: " +imc+ "<br>Obesidade de grau II.";
    }else{
        resposta.innerHTML = "IMC: " +imc+ "<br>Obesidade de grau III.";
    }
}