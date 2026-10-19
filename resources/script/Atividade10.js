let notas = [8, 7, 9, 4, 6, 10]

let valido = notas.every(notas => notas > 0 && notas <= 10)


if (valido) {
    console.log("Notas válidas")
}
else {
    console.log("Notas inválidas")
}