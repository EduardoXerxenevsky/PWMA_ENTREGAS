document.addEventListener('DOMContentLoaded', function () {
    // Simulação de banco de dados (array)
    const database = [
        { id: 1, tipoLogin: 'Professor', situacao: 'Online' },
        { id: 2, tipoLogin: 'Aluno', situacao: 'Offline' },
        { id: 3, tipoLogin: 'Professor', situacao: 'Online' },
        { id: 4, tipoLogin: 'Aluno', situacao: 'Online' },
        { id: 5, tipoLogin: 'Professor', situacao: 'Offline' },
    ];

    // Função para exibir os dados na tabela
    function populateTable() {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';

        database.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.tipoLogin}</td>
                <td>${user.situacao}</td>
            `;
            userList.appendChild(row);
        });
    }

    // Chamar a função para preencher a tabela inicialmente
    populateTable();
});