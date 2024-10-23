document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaUsuarios').querySelector('tbody');
    const novaLinha = tabela.insertRow();