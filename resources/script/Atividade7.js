let notas = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"]

while (i < notas.length) {
    if (notas[i] < 0 || notas[i] > 10) {
        notas[i] = 10;
    }
    i++;
}


console.log("Notas da turma:");
notas.forEach(function(nota) {
    console.log(nota);
});

console.log("Existe nota 10?", notas.includes(10));

console.log("Posição da nota 6:", notas.indexOf(6));

let posicao = notas.indexOf(10);

if (posicao !== -1) {
    notas.splice(posicao, 1);
}

notas.sort(function(a, b) {
    return a - b;
});

console.log("Relatório final de notas:");
console.log(notas);