function operacoes(event){
    event.preventDefault();
      
    var str = document.getElementById('equacao').value;
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block";
    
    str1 = str.split();
    resposta.innerHTML = str1;
    str2 = str1.split(0,"+");
    resposta.innerHTML += str2;

  }