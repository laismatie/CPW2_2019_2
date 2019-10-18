function inverterFrase(event){
    event.preventDefault();
    var frase = document.getElementById('frase').value;
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block";
    resposta.innerHTML = frase.split(" ").reverse().join(" ");
 }