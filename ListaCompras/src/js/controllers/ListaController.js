class ListaController {

    constructor(lista) {
        this.lista = lista;
        this.itensFiltrados = [];
    }

    salvar(item) {
        this.lista.push(item);
    }

    removerItem(descricao) {
        for (let i = 0; i < this.lista.length; i++) {
            if (descricao == this.lista[i].descricao) {
                this.lista.splice(i, 1);
            }
        }
    }

    filtrarItens(filtro) {
        if (this.lista.length > 0) {
            this.itensFiltrados = this.lista.filter(function (item) {
                let produto = item.descricao.toLowerCase();

                return produto.includes(filtro);
            });
        }
        return this.itensFiltrados;
    }

    recuperarTodos() {
        return this.lista;
    }
}