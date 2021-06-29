const novaTarefa = document.querySelector('[data-form-button]'); // constante para retornar o botão criado no html

//função para criar o botão de deletar
function criarBotaoDelete() {
    const botaoDelete = document.createElement('span');
    botaoDelete.innerText = "x";
    botaoDelete.classList = "close";
    botaoDelete.addEventListener('click', deletarTarefa);
    return botaoDelete;
}
//função para deletar a tarefa
function deletarTarefa(evento) {
    const botaoDeleteClicado = evento.target
    const itemDaLista = botaoDeleteClicado.parentElement
    itemDaLista.remove()
}
//função para criar o botão de concluir
function criarBotaoConcluir() {
    const botaoConcluir = document.createElement('input')
    botaoConcluir.setAttribute('type', 'checkbox')
    botaoConcluir.classList = "form-check-input"
    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir
}
//função para concluir a tarefa
function concluirTarefa(evento) {
    const botaoConcluirClicado = evento.target
    const itemDaListaConcluido = botaoConcluirClicado.parentElement
    itemDaListaConcluido.classList.toggle('tarefa_concluida')
}
// função para criar a tarefa
function criarTarefa(evento) {
    evento.preventDefault()
    const inputTarefa = document.querySelector('[data-form-input]');
    const valorTarefa = "- " + inputTarefa.value + '.'
    const listaDeTarefas = document.querySelector('[data-task]')

    novaLabel = document.createElement('label')
    novaLabel.innerText = valorTarefa
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')

    novoItem.appendChild(criarBotaoConcluir())
    novoItem.appendChild(novaLabel)
    novoItem.appendChild(criarBotaoDelete())

    listaDeTarefas.appendChild(novoItem)
    inputTarefa.value = ""
}
novaTarefa.addEventListener('click', criarTarefa) //quando o botão for apertado, chama a função de criar tarefa