function generateUserName() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var username = '';
    var size = 10;

    for (var i = 0; i < size; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        username += chars[randomIndex];
    }
    return username;
}

output.createAccount = {
    data: {
        userName: generateUserName(), // Gera o nome de usuário aleatório
    }
};