let numeroSecreto = gerarNumeroAleatorio();

// function com parametros. ele executa um determinado comando
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// funcao simples
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
}

// function com retorno 
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}