let botaoStart1 = false;

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

function jogo() {
    alert('teste');
}