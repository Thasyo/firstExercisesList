/* 
Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require('prompt-sync')();

let sumNumbersAndWeight = 0;
let weightedAverage = 0;
let sumWeight = 0;
let value = parseFloat(prompt("Digite um número: "));
let weight = parseFloat(prompt("Digite o peso: "));

while (value !== 0) {

    sumNumbersAndWeight += (value * weight);
    sumWeight += weight;
    weightedAverage = sumNumbersAndWeight / sumWeight;
    value = parseFloat(prompt("Digite um número: "));
    weight = parseFloat(prompt("Digite o peso: "));


}

console.log(`Média Ponderada: ${weightedAverage.toFixed(2)}.`);