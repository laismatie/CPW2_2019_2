
function adicionar(event){
    event.preventDefault();
    let texto = document.getElementById('lembrete').value;
    let mensagem = document.getElementById('mensagem');
    let paragrafo = document.createElement('p');
    paragrafo.innerText = texto;
    mensagem.appendChild(paragrafo);
}
