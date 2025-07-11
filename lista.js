// Elementos da página
const addTarefa = document.getElementById('botao');
const tarefaInput = document.getElementById('tarefa');
const tarefasContainer = document.getElementById('tarefas');
const temaSol = document.querySelector('.sol');
const temaLua = document.querySelector('.lua');
const temaRosa = document.querySelector('.rosa');
let tema = 0;


// [LocalStorage 1] - Função para salvar tarefas no localStorage
function salvarTarefas() {
    const tarefas = [];
    document.querySelectorAll('.task').forEach(task => {
        tarefas.push({
            text: task.querySelector('.task-text').textContent.trim(),
            completed: task.classList.contains('completed')
        });
    });
    // Armazena a lista de tarefas como string JSON
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// [LocalStorage 2] - Função para carregar tarefas do localStorage
function carregarTarefas() {
    // Recupera as tarefas salvas como string JSON
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
        // Converte a string JSON de volta para array de objetos
        const tarefas = JSON.parse(tarefasSalvas);
        tarefas.forEach(tarefa => {
            criarTarefa(tarefa.text, tarefa.completed);
        });
    }
}

// Função para criar uma nova tarefa na interface
function criarTarefa(texto, completada = false) {
    const novaTarefa = document.createElement('div');
    novaTarefa.className = 'task';

    if (completada) {
        novaTarefa.classList.add('completed');
    }

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = texto;
    novaTarefa.appendChild(taskText);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    // [Event Listener 1] - Botão de completar tarefa
    const completeBtn = document.createElement('div');
    completeBtn.className = 'task-action complete';
    completeBtn.innerHTML = '✓';
    completeBtn.addEventListener('click', () => {
        novaTarefa.classList.toggle('completed');
        salvarTarefas(); // Atualiza localStorage após mudança
    });

    // [Event Listener 2] - Botão de deletar tarefa
    const deleteBtn = document.createElement('div');
    deleteBtn.className = 'task-action delete';
    deleteBtn.innerHTML = '✕';
    deleteBtn.addEventListener('click', () => {
        novaTarefa.remove();
        salvarTarefas(); // Atualiza localStorage após remoção
    });

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);
    novaTarefa.appendChild(taskActions);

    tarefasContainer.appendChild(novaTarefa);
}

// [Event Listener 3] - Adicionar tarefa ao clicar no botão
addTarefa.addEventListener('click', () => {
    const textoTarefa = tarefaInput.value.trim();
    if (textoTarefa !== '') {
        criarTarefa(textoTarefa);
        tarefaInput.value = '';
        salvarTarefas(); // Atualiza localStorage com nova tarefa
    }
});

// [Event Listener 4] - Adicionar tarefa ao pressionar Enter
tarefaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTarefa.click(); // Dispara o evento de clique do botão
    }
});

function armazenaTema(){
    localStorage.setItem('tema', tema);
}

function trocarTema(){
    tema = localStorage.getItem('tema')
    if (tema == 0){
        temaSol.click();
    }
    if (tema == 1){
        temaLua.click();
    }
    if (tema == 2){
        temaRosa.click();
    }
}

// [LocalStorage 3] - Função para salvar tarefas no localStorage
function salvarContador() {
    localStorage.setItem('contador', contador); // Salva o contador de cliques no localStorage
}

// [LocalStorage 4] - Função para carregar contador de cliques do localStorage
function carregarClicks() {
    const valorSalvo = localStorage.getItem('contador');
    if (valorSalvo !== null) {
contador = parseInt(valorSalvo, 10);
contadorElement.textContent = contador;}
};

// [Event Listener 5] - Carrega tarefas ao iniciar a página
window.addEventListener('DOMContentLoaded', carregarTarefas); 

// [LocalStorage 6] - Carrega contador de cliques do localStorage
window.addEventListener('DOMContentLoaded', carregarClicks); 

window.addEventListener('DOMContentLoaded', trocarTema); 

// [Event Listener 7] - Contador de cliques
let contador = 0;
const contadorElement = document.querySelector('.contador');
const botaoMais = document.querySelector('#btnMais');
const botaoMenos = document.querySelector('#btnMenos');
const botaoMultiplicar = document.querySelector('#btnMultiplicar');
const botaoDividir = document.querySelector('#btnDividir');
const botaoZerar = document.querySelector('#btnZerar');

botaoMais.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
    salvarContador(); // Atualiza localStorage com o contador
}); 

botaoMenos.addEventListener('click', () => {
    contador--;
    contadorElement.textContent = contador;
    salvarContador(); // Atualiza localStorage com o contador
}); 

botaoMultiplicar.addEventListener('click', () => {
    contador = contador*2;
    contadorElement.textContent = contador;
    salvarContador(); // Atualiza localStorage com o contador
}); 

botaoDividir.addEventListener('click', () => {
    contador = contador/2;
    contadorElement.textContent = contador;
    salvarContador(); // Atualiza localStorage com o contador
}); 

botaoZerar.addEventListener('click', () => {
    contador = 0;
    contadorElement.textContent = contador;
    salvarContador(); // Atualiza localStorage com o contador
}); 

// [Event Listener 8] - Tema claro 
temaSol.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#2c3e50';
    document.querySelector('.container').style.backgroundColor = '#fff';
    document.querySelector('.container').style.boxShadow = '0 8px 24px rgba(34, 214, 40, 0.7)';
    tema = 0;
    armazenaTema()
});

// [Event Listener 9] - Tema escuro
temaLua.addEventListener('click', () => {
    document.body.style.backgroundColor = '#1a2536';
    document.body.style.color = '#2c3e50'
    document.querySelector('.container').style.backgroundColor = '#5b6b85';
    document.querySelector('.container').style.boxShadow = '0 4px 12px rgba(30, 141, 227, 0.4)';
    tema = 1;
    armazenaTema()
    })

    temaRosa.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgb(209, 151, 211)';
        document.body.style.color = 'rgb(0, 0, 0)';
        document.querySelector('.container').style.backgroundColor = 'rgb(218, 174, 196)';
        document.querySelector('.container').style.boxShadow = '0 4px 12px rgb(216, 10, 199)';
        tema = 2;
        armazenaTema()
        })
       
       