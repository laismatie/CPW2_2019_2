/**
 * Nosso BD fake! (in memory DB)
 * 
 //vetor vazio, sempre inicializar quando for trabalhar com ele depois */
var contatos = [];

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
        //Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);
        //Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}