var quotes = [
    '"Frase 1"',
    '"Frase 2"',
    '"Frase 3"',
    '"Frase 4"',
    '"Frase 5"'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


// Mudança de tema

var isDark = false;

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  document.getElementById('themeToggle').textContent = isDark ? '☀ Light' : '☾ Dark';
}