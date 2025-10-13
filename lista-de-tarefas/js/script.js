const inputTarefa = document.querySelector('#nome-tarefa');
const btnAddTarefa = document.querySelector('#btn-tarefa'); 
const corpoTabela = document.querySelector('#corpo-tabela');
let tarefas = []; 

function renderizaTarefa() {
    corpoTabela.innerHTML = '';
    tarefas.forEach(tarefa => {
        const linha = document.createElement('tr');
        const celula = document.createElement('td');
        celula.textContent = tarefa;
        linha.appendChild(celula);
        corpoTabela.appendChild(linha);
    });
}

function adicionarTarefa() {
    const tarefa = inputTarefa.value;
    tarefas.push(tarefa);
    renderizaTarefa();
    inputTarefa.textContent = '';
}

btnAddTarefa.addEventListener('click', adicionarTarefa);


