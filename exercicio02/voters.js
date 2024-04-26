/* Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */
const prompt = require('prompt-sync')();

let votersQuantity = parseInt(prompt("Quantidade de eleitores: "));
let whiteVotesQuantity = parseInt(prompt("Quantidade de votos brancos: "));
let nullVotesQuantity = parseInt(prompt("Quantidade de votos nulos: "));
let validVotesQuantity = parseInt(prompt("Quantidade de votos válidos: "));

let percentageWhiteVotes = (whiteVotesQuantity / votersQuantity) * 100;
let percentageNullVotes = (nullVotesQuantity / votersQuantity) * 100;
let percentageValidVotes = (validVotesQuantity / votersQuantity) * 100;

console.log("Percentual de votos em branco: ", percentageWhiteVotes);
console.log("Percentual de votos nulos: ", percentageNullVotes);
console.log("Percentual de votos válidos: ", percentageValidVotes);

