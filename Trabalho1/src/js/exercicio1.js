function fibonacci(event){
   event.preventDefault();
   var termo = parseInt(document.getElementById('valor').value);
   var resposta = document.getElementById('resposta');
   var penultimo = 0, ultimo = 1;
   var numero = 1;
   resposta.innerHTML = "";
   resposta.style.display = "block";
   if( termo==1){
      resposta.innerHTML+= 0+".";
   }else if(termo==2){
      resposta.innerHTML+= 0 + " e "+numero+".";
   }else{
      resposta.innerHTML+= 0 + ", ";
      for(var i=3 ; i<=termo; i++){
         resposta.innerHTML+= numero + ", ";
         numero = ultimo + penultimo;
         penultimo = ultimo;
         ultimo = numero;
      }
      resposta.innerHTML+= " "+ultimo+".";
   }
}