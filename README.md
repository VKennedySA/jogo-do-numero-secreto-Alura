# 🎮 Jogo do Número Secreto

Um jogo interativo desenvolvido em **JavaScript** onde o objetivo é adivinhar um número secreto gerado aleatoriamente.

## 📋 Descrição

O player deve descobrir um número entre 1 e 100 através de palpites. O jogo fornece feedback indicando se o número secreto é maior ou menor que o palpite inserido. A interface inclui feedback sonoro em português brasileiro e conta o número de tentativas necessárias para vencer.

## ✨ Funcionalidades

- 🎯 **Jogo interativo** - Adivinhe o número secreto com dicas
- 🔊 **Síntese de voz** - Feedback sonoro em português brasileiro usando Responsive Voice
- 📊 **Contador de tentativas** - Acompanhe quantas tentativas foram necessárias
- 🔄 **Novo jogo** - Reinicie o jogo com um novo número secreto
- 🚫 **Sem repetição** - Sistema que garante números únicos durante a sessão

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Digite um número entre 1 e 100 no campo de entrada
3. Clique em **"Chutar"** para enviar seu palpite
4. Receba feedback indicando se o número secreto é maior ou menor
5. Continue tentando até descobrir o número
6. Ao acertar, clique em **"Novo jogo"** para jogar novamente

## 📝 Notas

Este é um projeto educacional do curso de Lógica de Programação da Alura. O foco está nos conceitos básicos da lógica e em como aplicá-los em código:
- Declaração e uso de variáveis
- Uso de arrays e controle de estado (`listaNumerosSorteados`, `tamanhoDaLista`, `tentativas`)
- Funções com responsabilidades claras (`exibirTextoNaTela`, `verificarChute`, `tentarNovamente`)
- Estruturas de controle condicional (`if`, `else if`, `else`) para tomada de decisão
- Manipulação do DOM para leitura e alteração de conteúdo de elementos HTML
- Recursão simples para garantir números não repetidos na geração aleatória
- Atribuição e atualização de estado para reiniciar o jogo

---

**Divirta-se jogando! 🎉**
