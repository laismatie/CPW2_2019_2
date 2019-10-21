function fibonacci(event){
   event.preventDefault();
   let valor = parseInt(document.getElementById('valor').value);
   let resposta = document.getElementById('resposta');
   let penultimo = 0, ultimo = 1;
   let numero = 1;
   resposta.innerHTML = "";
   resposta.style.display = "block";
   if( valor==1){
      resposta.innerHTML+= 0+".";
   }else if(valor==2){
      resposta.innerHTML+= 0 + " e "+numero+".";
   }else{
      resposta.innerHTML+= 0 + ", ";
      for(let i=3 ; i<=valor; i++){
         resposta.innerHTML+= numero + ", ";
         numero = ultimo + penultimo;
         penultimo = ultimo;
         ultimo = numero;
      }
      resposta.innerHTML+= " "+ultimo+".";
   }
}