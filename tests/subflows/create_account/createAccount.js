function gerarUsername() {
    var caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var username = '';
    var tamanho = 10; // Tamanho do nome de usuário

    for (var i = 0; i < tamanho; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        username += caracteres[randomIndex];
    }
    return username;
}

output.createAccount = {
    data: {
        userName: gerarUsername(), // Gera o nome de usuário aleatório
    }
};