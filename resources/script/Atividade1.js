let senhaCorreta = "6742";
let tentativas = 3;
let senha = "";

while (tentativas > 0) {
    senha = prompt("Digite a senha:");

    if (senha === senhaCorreta) {
        alert("Acesso liberado!");
        break;
    } else {
        tentativas--;

        if (tentativas > 0) {
            alert("Senha incorreta! Você ainda tem " + tentativas + " tentativas.");
        } else {
            alert("Senha incorreta! Acesso bloqueado!");
        }
    }
}

