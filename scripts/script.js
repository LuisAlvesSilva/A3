let botaoStart1 = false;
let fase = 1;
let score = 0;

let pergunta1 = "x";
let pergunta2 = "xx";
let pergunta3 = "xxx";
let pergunta4 = "xxxx";
let pergunta5 = "xxxxx";


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
    if (botaoStart1 == true) {
        seletorFase(fase);
    } else {
        return;
    }
};

function seletorFase(){
    switch (fase) {
        case 1:
            console.log("Fase 1:", pergunta1);
            fase++;
            return console.log(fase);
        case 2:
            console.log("Fase 2:", pergunta2);
            fase++;
            return console.log(fase);
        case 3:
            console.log("Fase 3:", pergunta3);
            fase++;
            return console.log(fase);
        case 4:
            console.log("Fase 4:", pergunta4);
            fase++;
            return console.log(fase);
        case 5:
            console.log("Fase 5:", pergunta5);
            fase++;
            return console.log(fase);
        default:
        console.log("Todas as fases foram concluídas.");
    }
}


function jogo() {
    console.log(botaoStart1);
    console.log(seletorFase());
};