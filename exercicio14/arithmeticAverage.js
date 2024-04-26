/* 
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let soma = 0;
let arithmeticAverage = 0;
let numbersQuantity = 0;
let value = parseFloat(prompt("Digite um número: "));

while (value !== 0) {

    soma += value;
    numbersQuantity++;
    arithmeticAverage = soma / numbersQuantity;
    value = parseFloat(prompt("Digite um número: "));

}


console.log(`\nMédia aritmética: ${arithmeticAverage.toFixed(2)}.`);