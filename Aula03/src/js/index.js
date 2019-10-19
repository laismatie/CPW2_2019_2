/**
 * Nosso BD fake! (in memory DB)
 * 
 //vetor vazio, sempre inicializar quando for trabalhar com ele depois */
var contatos = [
    {
       nome: 'Lais',
       telefone: '00000000000',
       email: 'lais@email.com',
       dataNascimento:'23/07/2000'
    }
];
renderizarTabelaContatos();

//uma variável recebe a função que recupera alguma coisa que está na sua página
//cria um apelido para a função querySelector

function salvarContato(event){
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
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    //Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    //Invoca a renderização da tabela
    renderizarTabelaContatos();
    
}
function renderizarTabelaContatos(){
    if(contatos.length){
        let areaListagemContatos = document.getElementById('listagemContatos');
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
        let cabecalho = criaCabecalhoTabela();
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela();
        //Adiciona o corpo(dados) da tabela na tabela
        tabela.appendChild(corpoTabela);
       
        //Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}

function criaCabecalhoTabela(){
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

function criarCorpoTabela(){
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria as linhas de contatos
     */
    for(let i =0;i<contatos.length;i++){

        //Cria uma nova linha no corpo da tabela
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        //Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }
    return corpoTabela;
}