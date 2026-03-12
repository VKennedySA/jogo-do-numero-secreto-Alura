// Lista de números já sorteados para evitar repetições
let listaNumerosSorteados = [];
// Tamanho máximo da lista de números possíveis
let tamanhoDaLista = 10;
// Número secreto gerado aleatoriamente
let numeroSecreto = gerarNumeroAleatorio();
// Contador de tentativas do jogador
let tentativas = 1;

// Função para exibir texto na tela e falar com voz responsiva
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // Lê o texto em voz alta
}

// Função para definir os textos iniciais da página
function textoInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e '+ tamanhoDaLista);
}
textoInicial();

// Função para verificar o chute do usuário
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavreTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto em ${tentativas} ${palavreTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
}

// Função para gerar um número aleatório único
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * tamanhoDaLista + 1);
    // Se a lista estiver cheia, reinicia
    if (listaNumerosSorteados.length == tamanhoDaLista){
        listaNumerosSorteados = [];
    }
    // Se o número já foi sorteado, gera outro
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

// Função para limpar o campo de input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// Função para reiniciar o jogo
function tentarNovamente(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}