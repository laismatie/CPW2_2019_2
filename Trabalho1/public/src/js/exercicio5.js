function operacoes(event){
    event.preventDefault();  
    let str = document.getElementById('equacao').value;
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block";
    let valor = eval(str);
    resposta.innerHTML=valor;
  }