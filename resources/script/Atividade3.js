let jogos = ["Minecraft",
     "Free Fire",
    "Block Dash",
    "Gacha Life",
    "Roblox"];

let pergunta = prompt("Pesquise seu jogo:");

if (jogos.map(jogo => jogo.toLowerCase()).includes(pergunta.toLowerCase())) {
    alert("O jogo está na lista!");
} else {
    alert("O jogo não está na lista!");
};