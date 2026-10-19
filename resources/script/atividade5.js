let tarefas = [
    "Estudar HTML",
    "Estudar CSS",
    "Praticar JavaScript",
    "Estudar Laravel",
    "Revisar conteúdo"
];
let opcao = Number(prompt("Escolha uma das opções:\n 1- Remover uma tarefa \n 2- Atualizar tarefa \n 3- Exibir lista"))
switch(opcao){
    // excluir
    case 1:
        let excluir = prompt("Digite a tarefa para excluir:");
            let posicao = tarefas.findIndex(t => t === excluir);

            if (posicao !== -1) {
                tarefas.splice(posicao, 1);
                alert("Tarefa excluída!");
            } else {
                alert("Tarefa não encontrada!");
            }
    break;

    // atualizar
    case 2:
        let antiga = prompt("Digite a tarefa atual:");
            let indice = tarefas.indexOf(antiga);

            if (indice !== -1) {
                let atualizada = prompt("Digite o novo nome:");

                if (atualizada && atualizada.trim() !== "") {
                    tarefas[indice] = atualizada;
                    alert("Tarefa atualizada!");
                } else {
                    alert("Digite um nome válido!");
                }
            } else {
                alert("Tarefa não encontrada!");
            }
    break;

    case 3:
        if (tarefas.length === 0) {
                alert("Lista vazia!");
            } else {
                let lista = "";
                tarefas.forEach((tarefa, i) => {
                    lista += (i + 1) + " - " + tarefa + "\n";
                });
                alert(lista);
            }
    break;
    };