# 📜 Gerador de Citações

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Made with](https://img.shields.io/badge/Made%20with-JS-yellow)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Um projeto simples e elegante desenvolvido com HTML, CSS e JavaScript que exibe citações aleatórias e permite alternar entre tema claro e escuro.

## ✨ Demonstração
O usuário pode:

+ Gerar uma nova citação ao clicar no botão
+ Alternar entre modo Dark 🌙 e Light ☀
+ Visualizar uma interface limpa, minimalista e responsiva

## 🚀 Tecnologias Utilizadas

+ HTML5 (estrutura semântica)
+ CSS3 (variáveis + temas dinâmicos)
+ JavaScript (manipulação do DOM e lógica)

## 📁 Estrutura do Projeto

📦 gerador-de-citacoes 

┣ 📂 css 

┃ ┗ 📄 style.css 

┣ 📂 js 

┃ ┗ 📄 script.js 

┗ 📄 index.html

## ⚙️ Como Executar
1. Clone o repositório:

```git 
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Acesse a pasta:
```git 
cd seu-repositorio
```

3. Abra o arquivo index.html no navegador

## 🧠 Tutorial Didático (Passo a Passo)

1. Estrutura HTML

Criamos a base da aplicação com:

+ Um botão para alternar tema
+ Um container central
+ Um espaço para exibir a citação
+ Um botão para gerar nova frase

```html
<div id="quoteDisplay">Clique no botão para uma citação</div> <button onclick="newQuote()">Nova Citação</button>
```

👉 Aqui usamos ```id="quoteDisplay" ``` para manipular o conteúdo via JavaScript.

2. Lógica em JavaScript

### 📌 Array de citações

```js
var quotes = [
    '"Frase 1"',
    '"Frase 2"',
    '"Frase 3"',
    '"Frase 4"',
    '"Frase 5"'
]
```

### 🎲 Função de citação aleatória

```js
function newQuote() { var randomNumber = Math.floor(Math.random() * (quotes.length)); document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; }
```
💡 O que acontece aqui:

+ ```Math.random()``` gera um número entre 0 e 1
+ Multiplicamos pelo tamanho do array
+ ```Math.floor()``` arredonda para baixo
Resultado: índice aleatório válido.

### 🌙 Alternância de tema

```js
var isDark = false; function toggleTheme() { isDark = !isDark; document.documentElement.setAttribute('data-theme', isDark ? 'dark' : ''); document.getElementById('themeToggle').textContent = isDark ? '☀ Light' : '☾ Dark'; }
```

💡 Conceito importante:

+ Usamos um atributo customizado ```data-theme```
+ O CSS reage a esse atributo dinamicamente

3. Estilização com CSS

### 🎨 Variáveis CSS (Custom Properties)

```css
:root {
    --bg: #f5f0e8;
    --text-main: #1a1a1a;
}
🌑 Tema Dark
[data-theme="dark"] {
    --bg: #131210;
    --text-main: #f0ebe3;
}
```
💡 Vantagem:

+ Fácil manutenção
+ Troca de tema instantânea
+ Código limpo e escalável.

4. Manipulação do DOM

O JavaScript interage com o HTML usando:

```js
document.getElementById('quoteDisplay')
```
👉 Isso permite atualizar o conteúdo dinamicamente sem recarregar a página.

## 📌 Possíveis Melhorias

+ Adicionar autor das citações
+ Consumir API de frases (ex: quotes API)
+ Animação na troca de citações
+ Botão de copiar citação
+ Salvar tema no localStorage
  
## 🎯 Aprendizados
Com este projeto você pratica:

+ Manipulação do DOM
+ Eventos em JavaScript
+ Uso de arrays
+ CSS moderno com variáveis
+ Separação de responsabilidades (HTML, CSS, JS)

## 📄 Licença

Este projeto está sob a licença MIT.

## 💡 Contribuição

Sinta-se livre para abrir issues ou enviar pull requests!