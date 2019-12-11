let abacaxi = new Item('Abacaxi','3');
let acucar = new Item('Açucar','2');
let alcool = new Item('Álcool em gel','1');


var itens = [{descricao: 'Abacaxi', unidade: 'UN'},
    {descricao: 'Absorvente',unidade:'PCT'},
    {descricao: 'Achocolatado em pó',unidade:'Kg'},
    {descricao: 'Açúcar',unidade:'Kg'},
    {descricao: 'Água Sanitária',unidade:'Litro'},
    {descricao: 'Alcaparras',unidade:'UN'},
    {descricao: 'Álcool em gel',unidade:'UN'},
    {descricao: 'Alface',unidade:'Maço'},
    {descricao: 'Alho',unidade:'Kg'},
    {descricao: 'Arroz',unidade:'Kg'},
    {descricao: 'Azeite de Oliva',unidade:'UN'},
    {descricao: 'Azeitona',unidade:'Kg'},
    {descricao: 'Banana',unidade:'Kg'},
    {descricao: 'Batata',unidade:'Kg'},
    {descricao: 'Batata Palha',unidade:'PCT'},
    {descricao: 'Beterraba',unidade:'Kg'},
    {descricao: 'Bolacha',unidade:'PCT'},
    {descricao: 'Café',unidade:'Kg'},
    {descricao: 'Calabresa',unidade:'Kg'},
    {descricao: 'Carne Bovina',unidade:'Kg'},
    {descricao: 'Carne Suina',unidade:'Kg'},
    {descricao: 'Carvão',unidade:'Kg'},
    {descricao: 'Cebola',unidade:'Kg'},
    {descricao: 'Cenoura',unidade:'Kg'},
    {descricao: 'Cerveja',unidade:'UN'},
    {descricao: 'Chá',unidade:'CX'},
    {descricao: 'Cheiro-verde',unidade:'Maço'},
    {descricao: 'Chocolate',unidade:'Kg'},
    {descricao: 'Condicionador',unidade:'UN'},
    {descricao: 'Copo descartável',unidade:'PCT'},
    {descricao: 'Coxa sobre coxa',unidade:'Kg'},
    {descricao: 'Creme de leite',unidade:'UN'},
    {descricao: 'Creme dental',unidade:'UN'},
    {descricao: 'Iogurte',unidade:'UN'},
    {descricao: 'Desinfetante',unidade:'L'},
    {descricao: 'Erva Tereré',unidade:'Kg'},
    {descricao: 'Ervilha em conserva',unidade:'Kg'},
    {descricao: 'Escova de dente',unidade:'UN'},
    {descricao: 'Extrato de tomate',unidade:'Kg'},
    {descricao: 'Feijão',unidade:'Kg'},
    {descricao: 'Fermento Quimico',unidade:'UN'},
    {descricao: 'Fio dental',unidade:'UN'},
    {descricao: 'Fósforo',unidade:'CX'},
    {descricao: 'Frango',unidade:'Kg'},
    {descricao: 'Fubá',unidade:'Kg'},
    {descricao: 'Gel de cabelo',unidade:'UN'},
    {descricao: 'Hot Pocket',unidade:'UN'},
    {descricao: 'Laranja',unidade:'Kg'},
    {descricao: 'Leite',unidade:'Litro'},
    {descricao: 'Leite Condensado',unidade:'CX'},
    {descricao: 'Lenha',unidade:'Kg'},
    {descricao: 'Limão',unidade:'Kg'},
    {descricao: 'Luva de latex',unidade:'PCT'},
    {descricao: 'Maçã',unidade:'Kg'},
    {descricao: 'Macarrão',unidade:'Kg'},
    {descricao: 'Macarrão instantaneo',unidade:'UN'},
    {descricao: 'Mamão',unidade:'Kg'},
    {descricao: 'Manteiga',unidade:'Kg'},
    {descricao: 'Margarina',unidade:'Kg'},
    {descricao: 'Melancia',unidade:'Kg'},
    {descricao: 'Melão',unidade:'Kg'},
    {descricao: 'Milho verde em conserva',unidade:'Kg'},
    {descricao: 'Mistura de bolo',unidade:'PCT'},
    {descricao: 'Molho de Pimenta',unidade:'L'},
    {descricao: 'Molho de Soja',unidade:'L'},
    {descricao: 'Mussarela',unidade:'Kg'},
    {descricao: 'Óleo de soja',unidade:'UN'},
    {descricao: 'Ovos',unidade:'DZ'},
    {descricao: 'Pá de lixo',unidade:'UN'},
    {descricao: 'Palmito',unidade:'Kg'},
    {descricao: 'Pano de chão',unidade:'UN'},
    {descricao: 'Pão',unidade:'UN'},
    {descricao: 'Papel alumínio',unidade:'UN'},
    {descricao: 'Papel higiênico',unidade:'PCT'},
    {descricao: 'Papel Manteiga',unidade:'UN'},
    {descricao: 'Peixe',unidade:'Kg'},
    {descricao: 'Pêra',unidade:'Kg'},
    {descricao: 'Pimenta do Reino',unidade:'G'},
    {descricao: 'Pimentão',unidade:'Kg'},
    {descricao: 'Milho de pipoca',unidade:'Kg'},
    {descricao: 'Plástico filme',unidade:'UN'},
    {descricao: 'Presunto',unidade:'Kg'},
    {descricao: 'Rabanete',unidade:'Kg'},
    {descricao: 'Refrigerante',unidade:'UN'},
    {descricao: 'Rodo',unidade:'UN'},
    {descricao: 'Rúcula',unidade:'Maço'},
    {descricao: 'Sabão em barra',unidade:'Kg'},
    {descricao: 'Sabão em pó',unidade:'Kg'},
    {descricao: 'Sabonete',unidade:'UN'},
    {descricao: 'Saco de lixo',unidade:'PCT'},
    {descricao: 'Sal',unidade:'Kg'},
    {descricao: 'Shampoo',unidade:'UN'},
    {descricao: 'Steak de Frango',unidade:'UN'},
    {descricao: 'Tomate',unidade:'Kg'},
    {descricao: 'Farinha de Trigo',unidade:'Kg'},
    {descricao: 'Uva',unidade:'Kg'},
    {descricao: 'Vassoura',unidade:'UN'},
    {descricao: 'Vinagre',unidade:'UN'},
    {descricao: 'Vinho',unidade:'UN'}];

var lista = [];

function selecionarItem() {
    var select = document.getElementById("item"); 

    for(var i = 0; i < itens.length; i++) {
        var opcao = document.createElement("option");
        opcao.text = itens[i].descricao;
        opcao.value = i;
        select.appendChild(opcao);
    }

}

selecionarItem();

function adicionarUnidade(){   
    var indice = document.getElementById('item').value;
    document.getElementById('unidadeMedida').innerText= this.itens[indice].unidade;
    
}
adicionarUnidade() ;

/*function adicionarItem(event){
    event.preventDefault();
    let listaProdutos = document.getElementById('listaProdutos');

    let valorProduto = document.getElementById('item').value;
    let produdoSelecionado = itens[valorProduto].descricao;
    let quantidadeProduto = document.getElementById('quantidade').value;
    let itemParagrafo = document.createElement('p');
    itemParagrafo.innerText = produdoSelecionado;
    listaProdutos.appendChild(itemParagrafo);
}*/

var listaView = new ListaView(this.lista,this.itens);