function embaralhar(senha) {

    return senha
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

}

function gerarSenha() {

    let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let especiais = "!@#$%&*";

    let todos = letrasMinusculas + letrasMaiusculas + numeros + especiais;

    let senha = "";

    // garante um de cada
    senha += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    senha += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += especiais[Math.floor(Math.random() * especiais.length)];

    for (let i = senha.length; i < 10; i++) {

        let random = Math.floor(Math.random() * todos.length);

        senha += todos[random];

    }

    senha = embaralhar(senha);

    document.getElementById("senha").value = senha;

}

function copiarSenha() {

    let campoSenha = document.getElementById("senha");

    navigator.clipboard.writeText(campoSenha.value);

}