/* 
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

let value01 = parseFloat(prompt("1° Valor: "));
let value02 = parseFloat(prompt("2° Valor: "));

let values = [value01, value02];

let valuesInAscendingOrder = values.sort();

console.log(valuesInAscendingOrder);