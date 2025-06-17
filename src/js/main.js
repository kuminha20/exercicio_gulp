// Função para inicializar a aplicação
function init() {
    console.log('Aplicação inicializada');
    setupEventListeners();
}

// Configurar event listeners
function setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    });
}

// Manipulador de clique do botão
function handleButtonClick(event) {
    console.log('Botão clicado:', event.target);
}

// Inicializar a aplicação
init(); 