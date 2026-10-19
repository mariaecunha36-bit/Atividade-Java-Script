let notas = [8, 7, 9, 4, 6, 10];

let reprovado = notas.some(notas => notas < 5)
console.log (reprovado)

if (reprovado) {
    console.log ("Existe Pelo menos um aluno reprovado!")
}
else ("Nao existe nenhum aluno reprovado")