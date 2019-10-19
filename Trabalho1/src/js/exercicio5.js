function operacoes(event){
    event.preventDefault();  
    let str = document.getElementById('equacao').value;
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    resposta.style.display = "block";
    let operadorSelecionado = "+";
    let num=[];
    let num2="";
    for(let i=0; i<=str.lenght;i++){
      if(str[i]==operadorSelecionado)
      num2 = str.split(operadorSelecionado)
      num.push(num2);
    }
    operadorSelecionado="-";
      for(let i=0; i<=str.lenght;i++){
        if(str[i]==operadorSelecionado)
        num2=str.split(operadorSelecionado);
        num.push(num2);
      }
    console.log(num);
  }