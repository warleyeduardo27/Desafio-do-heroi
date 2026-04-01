console.log("Bem-vindo ao jogo de Heróis! Aqui você pode descobrir o nível dos seus heróis com base na experiência acumulada. Vamos começar!");
// 1. Variáveis e Coleções (Array de objetos)
const herois = [
    { nome: "Arthur", xp: 950 },
    { nome: "Jaina", xp: 1500 },
    { nome: "Uther", xp: 4500 },
    { nome: "Sylvanas", xp: 6200 },
    { nome: "Thrall", xp: 7500 },
    { nome: "Anduin", xp: 8800 },
    { nome: "Illidan", xp: 9900 },
    { nome: "Medivh", xp: 12000 }
];

// 2. Laço de Repetição
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3. Estruturas de Decisão e Operadores
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4. Saída
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}