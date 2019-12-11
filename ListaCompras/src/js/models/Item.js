class Item {
   
    /**
     * Ao construir um novo objeto da Lista, devem ser informados o item e 
     * a quantidade do novo item.
     * @param {*} item Nome do produto
     * @param {*} unidadeDeMedida Unidade de medida do produto
     * @param {*} quantidade Quantidade do produto
     * */
    constructor(item, unidadeDeMedida, quantidade){
      
        this.descricao = item;
        this.unidadeDeMedida = unidadeDeMedida;
        this.quantidade = quantidade;
    }
}