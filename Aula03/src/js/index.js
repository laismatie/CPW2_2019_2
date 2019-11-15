/**
 * Nosso BD fake! (in memory DB)
 * 
 //vetor vazio, sempre inicializar quando for trabalhar com ele depois */
var contatos = [
    {
       nome: 'Laís Matie Mori Hara',
       telefone: '(67) 99690-2502',
       email: 'lais@email.com',
       dataNascimento:'23/07/2000'
    },
    {
        nome: 'Sidney Roberto ',
        telefone: '(67) 96770-2502',
        email: 'sidneyifms@email.com',
        dataNascimento:'12/01/1987'
    },
    {
        nome: 'Lucas Negri',
        telefone: '(67) 99803-0023',
        email: 'lucasnegri@email.com',
        dataNascimento:'03/11/1990'
    },
    {
        nome: 'Anastácia Menezes',
        telefone: '(67) 99234-0987',
        email: 'anastaciatsi@email.com',
        dataNascimento:'29/08/1979'
    },
    {
        nome: 'Geovanna Chaves',
        telefone: '(67) 99706-5577',
        email: 'geovannachaves@email.com',
        dataNascimento:'16/11/2000'
    }
];
renderizarTabelaContatos(contatos);
renderizarCardsContatos(contatos);

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
    renderizarTabelaContatos(contatos);

    //Invoca a renderização dos cards
    renderizarCardsContatos(contatos);
    
}
function renderizarTabelaContatos(listaContatos){
    if(listaContatos.length){
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
        let cabecalho = criaCabecalhoTabela();
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela(listaContatos);
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

function criarCorpoTabela(listaContatos){
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria as linhas de contatos
     */
    for(let i =0;i<listaContatos.length;i++){

        //Cria uma nova linha no corpo da tabela
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = listaContatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = listaContatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = listaContatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = listaContatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        //Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }
    return corpoTabela;
}

function renderizarCardsContatos(listaContatos){
    //se tiver algum contato 
    if(listaContatos.length>0){
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
        listaContatos.forEach(function (contato){
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
function filtrarContatos() {
    console.log(contatos);
    // Se tiver pelo menos um contato...
    if (contatos.length > 0) {
        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();

        /**
         * Filtra os contatos de acordo
         * com o texto digitado pelo 
         * usuário no campo de filtro
         */
        let contatosFiltrados = contatos.filter(function (contato) {
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