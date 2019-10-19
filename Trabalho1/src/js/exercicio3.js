function valorBinario(event){
  event.preventDefault();
    
  let valor = parseInt(document.getElementById('valor').value);
  let resposta = document.getElementById('resposta');
  resposta.innerHTML = "";
  resposta.style.display = "block";
  valor =  valor.toString(2);
  while (valor.length < 8) {
    valor = "0" + valor;
  }
  resposta.innerHTML += valor;
}