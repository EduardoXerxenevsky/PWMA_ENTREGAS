document.addEventListener('DOMContentLoaded', function () {
    // Simulação de banco de dados (array)
    const database = [
        { id: 1, tipoLogin: 'Professor', situacao: 'Online', login: 'Adalberto123' , senha: 'coxinha123'},
        { id: 2, tipoLogin: 'Aluno', situacao: 'Offline' , login: 'C4rl1nh05' , senha: 'P@$$w0rd'},
        { id: 3, tipoLogin: 'Professor', situacao: 'Online' , login: 'MarcelinhoCarioca' , senha: 'vasco123'},
        { id: 4, tipoLogin: 'Aluno', situacao: 'Online' , login: 'LuisAlbertoSuarez' , senha: 'Am0M3ss1'},
        { id: 5, tipoLogin: 'Professor', situacao: 'Offline' , login: 'G4biG0l' , senha: 'V4iC0r1nth1@ns'},
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
                <td class="${user.situacao.toLowerCase()}">${user.situacao}</td>
                <td>${user.login}</td>
                <td>${user.senha}</td>
            `;
            userList.appendChild(row);
        });
    }

    // Chamar a função para preencher a tabela inicialmente
    populateTable();
});
