/* 
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require('prompt-sync')();

let number = parseInt(prompt("Número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${number}`);
}