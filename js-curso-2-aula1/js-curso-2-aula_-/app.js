let listasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'jogo do número secreto');
exibirTextoNaTela('p' , 'escolha um número entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto é menor');
        } else{
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite){
listasDeNumerosSorteados = [];
}
    if  (listasDeNumerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listasDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listasDeNumerosSorteados)
        return NumeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
}
document.getElementById('reiniciar').setAttribute('disabled', true)



