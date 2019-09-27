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

    console.log(contatos);
}