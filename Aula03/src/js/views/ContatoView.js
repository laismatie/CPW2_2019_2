class ContatoView{

    constructor(contatos){
        this.contatos=contatos;
        this.contatosFiltrados = contatos;
        this.renderizarCardsContatos();
        this.renderizarTabelaContatos();
    }

     salvarContato(event){
    //Inibe a recarga da página
    event.preventDefault();

   //let nome = document.querySelector('#nome').value;
   // $ -> document.querySelector
   // val() = value
   //Recupera os valores do formulário
   let nome = $('#nome').val(); 
   let telefone = $('#telefone').val();
   let email = $('#email').val();
   let dataNascimento = $('#dataNascimento').val();

   //Criar um objeto de contato
   //se tiver muitas quebrar
   let contato = new Contato(nome, telefone, email, dataNascimento);

   //Adiciona o contato no nosso BD (no final do vetor)
   this.contatos.push(contato);

   //Invoca a renderização da tabela
   renderizarTabelaContatos();

   //Invoca a renderização dos cards
   renderizarCardsContatos();
   
}
 renderizarTabelaContatos(){
   if(this.contatosFiltrados.length){
       let areaListagemContatos = document.getElementById('tabelaContatos');
       /**
        * Limpa a área de listagem
        */
       areaListagemContatos.innerHTML="";
       /**
        * areaListagemContatos.innerHTML = `
        * <table>
        *  <thead>
        *      <tr>
        *         <th>Nome</th>
        *         <th>Telefone</th>
        *         <th>E-mail</th>
        *         <th>DataNasc.</th>
        *      </tr>
        *  </thead>
        * </table>
        * `
        */

       /**
        * Cria a tabela
        */
       let tabela = document.createElement('table');
       let cabecalho = this.criaCabecalhoTabela();
       tabela.appendChild(cabecalho);

       let corpoTabela = criarCorpoTabela();
       //Adiciona o corpo(dados) da tabela na tabela
       tabela.appendChild(corpoTabela);
      
       //Adiciona a tabela na área de listagem
       areaListagemContatos.appendChild(tabela);
   }
}

criaCabecalhoTabela(){
   /**
   * Cria o cabeçalho da tabela
   */
   let cabecalho = document.createElement('thead');
   let linhaCabecalho = document.createElement('tr');
   let colunaNome = document.createElement('th');
   colunaNome.innerText = 'Nome';
   let colunaTelefone = document.createElement('th');
   colunaTelefone.innerText = 'Telefone';
   let colunaEmail = document.createElement('th');
   colunaEmail.innerText = 'E-mail';
   let colunaDataNasc = document.createElement('th');
   colunaDataNasc.innerText = 'Data Nasc.';
   linhaCabecalho.appendChild(colunaNome);
   linhaCabecalho.appendChild(colunaTelefone);
   linhaCabecalho.appendChild(colunaEmail);
   linhaCabecalho.appendChild(colunaDataNasc);

   //Adiciona a linha do cabeçalho no cabeçalho
   cabecalho.appendChild(linhaCabecalho);
   
   //Retorna o cabeçalho criado
   return cabecalho;
}
criarCorpoTabela(){
   /**
    * Cria o corpo da tabela
    */
   let corpoTabela = document.createElement('tbody');

   /**
    * Cria as linhas de contatos
    */
   for(let i =0;i<this.contatosFiltrados.length;i++){

       //Cria uma nova linha no corpo da tabela
       let linha = document.createElement('tr');

       let celulaNome = document.createElement('td');
       celulaNome.innerText = this.contatosFiltrados[i].nome;
       linha.appendChild(celulaNome);
       let celulaTelefone = document.createElement('td');
       celulaTelefone.innerText = this.contatosFiltrados[i].telefone;
       linha.appendChild(celulaTelefone);
       let celulaEmail = document.createElement('td');
       celulaEmail.innerText = this.contatosFiltrados[i].email;
       linha.appendChild(celulaEmail);
       let celulaDataNasc = document.createElement('td');
       celulaDataNasc.innerText = this.contatosFiltrados[i].dataNascimento;
       linha.appendChild(celulaDataNasc);

       //Adiciona a nova linha no corpo da tabela
       corpoTabela.appendChild(linha);
   }
   return corpoTabela;
}
 renderizarCardsContatos(){
   //se tiver algum contato 
   if(this.contatosFiltrados.length>0){
       let areaListagemContatos = document.getElementById('cardsContatos');
       /**
        * Limpa a área de listagem
        */
       areaListagemContatos.innerHTML = '';
       /**
        * Ao invés de usar um loop, utilizaremos a funcao forEach
        * pega cada um dos contatos e joga na variável pela função anônima
        */
       //contatos.forEach(function(contato) {});
       this.contatosFiltrados.forEach(function (contato){
           let card = document.createElement('div');
           let inicialNome = document.createElement('span');
           //pega o caractere inicial da String
           inicialNome.innerText = contato.nome.charAt(0);
           let nome = document.createElement('span');

           let tamanhoNome = contato.nome.length;
           //pega todo mundo menos o primeiro 
           nome.innerText = contato.nome.substr(1, tamanhoNome);

           let telefone = document.createElement('span');
           telefone.innerText = contato.telefone;
           let email = document.createElement('span');
           email.innerText = contato.email;
           let dataNasc = document.createElement('span');
           dataNasc.innerText = contato.dataNascimento;

           card.appendChild(inicialNome);
           card.appendChild(nome);
           card.appendChild(telefone);
           card.appendChild(email);
           card.appendChild(dataNasc);

           areaListagemContatos.appendChild(card);
       });
   }
}
 filtrarContatos() {
   // Se tiver pelo menos um contato...
   if (this.contatos.length > 0) {
       let filtro = document.getElementById('filtro').value;
       filtro = filtro.toLowerCase();

       /**
        * Filtra os contatos de acordo
        * com o texto digitado pelo 
        * usuário no campo de filtro
        */
       this.contatosFiltrados = this.contatos.filter(function (contato) {
           let nome = contato.nome.toLowerCase();
           let email = contato.email.toLowerCase();

           /**
            * Se o nome ou o e-mail do contato
            * conter o filtro do usuário, retorno
            * o contato
            */
           if (nome.includes(filtro) || email.includes(filtro)) {
               return contato;
           }
       });

       renderizarCardsContatos(contatosFiltrados);
       renderizarTabelaContatos(contatosFiltrados);
   }
} 
}