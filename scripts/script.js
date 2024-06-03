let botaoStart1 = false;
console.log(botaoStart1)

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('teste').addEventListener('click', () => {
        botaoStart();
        start(botaoStart1);
    });
});

function botaoStart() {
    botaoStart1 = true;
}

function start(botaoStart1) {
    if (botaoStart1 == true) {
        jogo();
    }
}

let frase2 = "Segurança"

function jogo() {
    console.log(botaoStart1)

    document.getElementById("frase").innerHTML = frase2
}