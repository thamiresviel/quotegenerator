var quotes = [
    '"Thamires Professora de TI"',
    '"Bananona"',
    '"Gabi Fofinha"',
    '"Eu to terminando de fazer aqui"',
    '"Eu sou gaguinho — Gago 2026"'
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