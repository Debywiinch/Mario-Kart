const player1 = { name: "Mario", speed: 10, handling: 8, power: 9, points: 0 };
const player2 = { name: "Luigi", speed: 9, handling: 9, power: 8, points: 0 };
const player3 = { name: "Peach", speed: 8, handling: 10, power: 7, points: 0 };
const player4 = { name: "Bowser", speed: 7, handling: 7, power: 10, points: 0 };
const player5 = { name: "Yoshi", speed: 9, handling: 8, power: 8, points: 0 };

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    const random = Math.random();
    let result;

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

async function logRollResults(characterName, statLabel, diceResult, attribute) {
    const total = diceResult + attribute;
    console.log(
        `${characterName} 🎲 rolou no teste de ${statLabel}: dado ${diceResult} + atributo ${attribute} = ${total}`
    );
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁🚦 Rodada ${round}`);

        const block = await getRandomBlock();
        console.log(`🏁🚦 Bloco sorteado: ${block}`);

        const diceResult1 = await rollDice();
        const diceResult2 = await rollDice();

        let totalSkill1 = 0;
        let totalSkill2 = 0;

        if (block === "RETA") {
            totalSkill1 = diceResult1 + character1.speed;
            totalSkill2 = diceResult2 + character2.speed;
            await logRollResults(
                character1.name,
                "velocidade",
                diceResult1,
                character1.speed
            );
            await logRollResults(
                character2.name,
                "velocidade",
                diceResult2,
                character2.speed
            );
        } else if (block === "CURVA") {
            totalSkill1 = diceResult1 + character1.handling;
            totalSkill2 = diceResult2 + character2.handling;
            await logRollResults(
                character1.name,
                "manobra",
                diceResult1,
                character1.handling
            );
            await logRollResults(
                character2.name,
                "manobra",
                diceResult2,
                character2.handling
            );
        } else if (block === "CONFRONTO") {
            totalSkill1 = diceResult1 + character1.power;
            totalSkill2 = diceResult2 + character2.power;
            await logRollResults(
                character1.name,
                "poder",
                diceResult1,
                character1.power
            );
            await logRollResults(
                character2.name,
                "poder",
                diceResult2,
                character2.power
            );

            if (totalSkill1 > totalSkill2) {
                if (character2.points > 0) {
                    character2.points--;
                }
                console.log(
                    `${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto (se tinha).`
                );
            } else if (totalSkill2 > totalSkill1) {
                if (character1.points > 0) {
                    character1.points--;
                }
                console.log(
                    `${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto (se tinha).`
                );
            } else {
                console.log("Confronto empatado! Nenhum ponto foi perdido.");
            }
        }

        if (block !== "CONFRONTO") {
            if (totalSkill1 > totalSkill2) {
                console.log(`${character1.name} marcou um ponto!`);
                character1.points++;
            } else if (totalSkill2 > totalSkill1) {
                console.log(`${character2.name} marcou um ponto!`);
                character2.points++;
            } else {
                console.log("Empate na rodada! Ninguém marcou ponto.");
            }
        }

        console.log("---------------------------");
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado Final:")
    console.log(`${character1.name} : ${character1.points} pontos(s)`)
    console.log(`${character2.name} : ${character2.points} pontos(s)`)
    
    if(character1.points > character2.points){
        console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆`);
    }else if(character2.points > character1.points){
        console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆`);
    }else {
        console.log("A corrida terminou em empate!");
    }
}

async function main() {
    console.log(
        `🏁🚦 Corrida entre ${player1.name} e ${player2.name} começando...\n`
    );
    await playRaceEngine(player1, player2);
    console.log(
        `\n🏆 Placar final: ${player1.name} ${player1.points} x ${player2.points} ${player2.name}`
    );
}

await main();
