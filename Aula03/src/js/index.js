/**
 * Nosso BD fake! (in memory DB)
 */

//Cria o objeto lais
let lais = new Contato(
    'Laís Matie Mori Hara','(67) 99690-2502',
    'lais@email.com','23/06/2000');

let sidney = new Contato(
    'Sidney Roberto','(67) 96770-2502',
    'sidneyifms@email.com','12/01/1987');

let lucas = new Contato(
    'Lucas Negri','(67) 99803-0023',
    'lucasnegri@email.com','03/11/1990');

let geovanna = new Contato(
    'Geovanna Chaves','(67) 99706-5577',
    'geovannachaves@email.com','16/11/2000');

let anastacia = new Contato(
    'Anastácia Menezes','(67) 99234-0987',
    'anastaciatsi@email.com','29/08/1979');

//vetor vazio, sempre inicializar quando for trabalhar com ele depois */
var contatos = [lais, sidney, lucas, geovanna, anastacia];
/**
 * Instancia o objeto da ContatoView
 */
let contatoView = new ContatoView(contatos);
contatoView.renderizarTabelaContatos();
contatoView.renderizarCardsContatos();
