class ListaView {

    constructor(lista,itens) {
        this.controller =
            new ListaController(lista);
        //this.renderizarCardsContatos(contatos);
        this.renderizarTabelaItens(lista);
        this.contador = 1;
        this.itens = itens;
    }

    adicionarItem(event) {
        event.preventDefault();

        let posicao = document.getElementById('item').value;
        let quantidade = document.getElementById('quantidade').value;
        let unidadeDeMedida = this.itens[posicao].unidade;

        //Criar um objeto de contato
        //se tiver muitas quebrar
        let item = new Item(this.itens[posicao].descricao, unidadeDeMedida, quantidade);

        this.controller.salvar(item);

        this.limparFormulario();

        let lista = this.controller.recuperarTodos();

        // Limpa o filtro
        document.getElementById('filtro').value = '';

        //Invoca a renderização da tabela
        this.renderizarTabelaItens(lista);
    }

    renderizarTabelaItens(lista) {
        let areaListagem = document.getElementById('listaProdutos');
        areaListagem.innerHTML = "";
        if (lista.length > 0) {
            document.getElementById("minhaLista").style.display = "block";
            let tabela = document.createElement('table');
            tabela.setAttribute('id','tabelaProdutos')

            let corpoTabela = this.criarCorpoTabela(lista);
            //Adiciona o corpo(dados) da tabela na tabela
            tabela.appendChild(corpoTabela);

            //Adiciona a tabela na área de listagem
            areaListagem.appendChild(tabela);   
        } else {
            document.getElementById("minhaLista").style.display = "none";
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Vamos as compras? Adicione um produto na lista!';
            areaListagem.appendChild(spanMensagem);
        }
    }

    criarCorpoTabela(lista) {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria as linhas de itens
         */
        for (let i = 0; i < lista.length; i++) {

            //Cria uma nova linha no corpo da tabela
            let linha = document.createElement('tr');
            //linha.setAttribute('id', 'linhaProduto')
            
            let checar = document.createElement('td');

            //criar a imagem (innerHTML ou createElement img)
            checar.innerHTML = '<img onclick = "listaView.checar('+i+')"id="checar'+i+'" src="src/img/checar.png"></img>';
            linha.appendChild(checar);

            let descricao = document.createElement('td');
            descricao.innerText = lista[i].quantidade+' '+lista[i].unidadeDeMedida+' de '+lista[i].descricao;
            linha.appendChild(descricao);

            let excluir = document.createElement('td');

            excluir.innerHTML ='<a href="#" onclick="listaView.deleteRow(\''+lista[i].descricao+'\');"><img src="src/img/excluir.png"></a>';
            linha.appendChild(excluir);

            //Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }
        return corpoTabela;
    }

    limparFormulario() {
        [
            'item',
            'quantidade',
        ].forEach(id => document.getElementById(id).value = '');
    }

    filtrarItens() {
        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();

        let itens = this.controller.filtrarItens(filtro);

        // this.renderizarCardsContatos(contatos);
        this.renderizarTabelaItens(itens);
    }

    deleteRow(descricao) {
        this.controller.removerItem(descricao);
        let listaRecuperada = this.controller.recuperarTodos();
        this.renderizarTabelaItens(listaRecuperada);
    }

    checar(indice) {

        var img = document.getElementById(`checar${indice}`).src;
        if (img.indexOf('checar2.png')!=-1) {
            document.getElementById(`checar${indice}`).src  = 'src/img/checar.png';
        }
         else {
           document.getElementById(`checar${indice}`).src = 'src/img/checar2.png';
       }
    }
}
