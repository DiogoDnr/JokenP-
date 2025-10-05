

const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0
const choices = ['rock', 'paper', 'scissors']


const playhuman = (humanchoice) => {

    // Se já estiver animando, ignora cliques
    if (window._animandoMaquina) return;

    // Inicia animação; quando terminar, executa a jogada da máquina real
    window._animandoMaquina = true;
    animarMaquina(() => {
        const machineChoice = playMachine();
        const machineEmoji = traduzir(machineChoice);
        machineChoiceElement.innerText = "Máquina: " + machineEmoji;
        window._animandoMaquina = false;
        playTheGame(humanchoice, machineChoice);
    });

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randmoNumber = Math.floor(Math.random() * 3)

       return choices[randmoNumber]
}


const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Empatou!'

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você Ganhou!'

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu!'
    }
}


const machineChoiceElement = document.getElementById("machine-choice");


function animarMaquina(callback) {
    const choices = ["rock", "paper", "scissors"];
    let tempo = 70;
    let trocas = 0;
    let maxTrocas = 15;

    function animar() {
        
        const escolhaTemp = choices[Math.floor(Math.random() * 3)];
        machineChoiceElement.innerText = "Máquina: " + traduzir(escolhaTemp);

        trocas++;

        if (trocas < maxTrocas) {
            tempo += 50;
            setTimeout(animar, tempo);
        } else {
            callback();
        }
    }

    animar();
}

// Traduz palavras para emojis
function traduzir(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "✌️";
}
