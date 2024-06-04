let botaoStart1 = false;
console.log(botaoStart1);

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('teste').addEventListener('click', () => {
        botaoStart();
        start(botaoStart1);
    });
});

function botaoStart() {
    botaoStart1 = true;
};

function start(botaoStart1) {
    if (botaoStart1) {
        jogo();
    } else {
        return;
    }
};

function jogo() {
    console.log(botaoStart1);
    let jogim = document.getElementsByClassName("jogo");
    if (jogim.length > 0) {
        jogim[0].style.backgroundImage = 'url("/styles/Images/!.png")';
        jogim[0].style.backgroundRepeat = 'no-repeat';
    }
    let teste = document.getElementById("teste")
    teste.style.display = 'none'
};
