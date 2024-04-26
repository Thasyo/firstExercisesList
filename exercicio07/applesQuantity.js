/* 
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let applesQuantity = parseInt(prompt("Quantas maçãs você deseja comprar: "));
let totalValue = 0;

if (applesQuantity < 12) {
    totalValue = applesQuantity * 0.30;
} else {
    totalValue = applesQuantity * 0.25;
}

console.log("Total de maçãs compradas: ", applesQuantity);
console.log("Valor total: $", totalValue);