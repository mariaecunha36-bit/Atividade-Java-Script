let livros = ["Diario De Anne Frank",
    "Batman Absolut",
    "Manifesto comunista",
    "A Culpa é das Estrelas",
    "Revolução dos bichos"];

let posicao = livros.indexOf("Dom Casmurro");
let pergunta = prompt("Pesquise seu livro:")

if (posicao !== -1) {
    alert("Livro encontrado na posição " + posicao + ".");
} else {
    alert("Livro não encontrado.");
}