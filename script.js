document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaUsuarios').querySelector('tbody');
    const novaLinha = tabela.insertRow();

    // Insere as células na linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    // Preenche as células com os dados do formulário
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpa o formulário
    document.getElementById('cadastroForm').reset();
});