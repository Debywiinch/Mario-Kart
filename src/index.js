const player1 = { name: "Mario", speed: 10, handling: 8, power: 9, points: 0, };
const player2 = { name: "Luigi", speed: 9, handling: 9, power: 8, points: 0, };
const player3 = { name: "Peach", speed: 8, handling: 10, power: 7, points: 0, };
const player4 = { name: "Bowser", speed: 7, handling: 7, power: 10, points: 0, };
const player5 = { name: "Yoshi", speed: 9, handling: 8, power: 8, points: 0, };

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }
    return result;
}

async function playRaceEngine(character1, character2) {
    
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁🚦 Rodada ${round}`);

//sortear bloco de pista 
let block = await getRandomBlock();
console.log(`🏁🚦 Bloco sorteado: ${block}`);

    }





}

async function main() {
    console.log(
    `🏁🚦 Corrida entre ${player1.name} e ${player2.name} começando...\n`);

    
    
};

await playRaceEngine(player1, player2);

main();