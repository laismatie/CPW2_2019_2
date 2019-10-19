function inverterFrase(event){
    event.preventDefault();
    let frase = document.getElementById('frase').value;
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block";
    resposta.innerHTML = frase.split(" ").reverse().join(" ");
 }