// Simulação de um banco de dados fictício
const users = [
    { username: "usuario1", password: "senha1" },
    { username: "usuario2", password: "senha2" }
];

// Cadastro de Usuário
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o nome de usuário já existe
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        document.getElementById("message").textContent = "Nome de usuário já existe!";
    } else {
        // Adiciona o novo usuário à lista fictícia
        users.push({ username, password });
        document.getElementById("message").textContent = "Cadastro realizado com sucesso!";
    }
});

// Login de Usuário
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Verifica se o usuário e senha correspondem
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        document.getElementById("message").textContent = "Login bem-sucedido!";
        window.location.href = "pages/index.html";
    } else {
        document.getElementById("message").textContent = "Nome de usuário ou senha incorretos.";
    }
});