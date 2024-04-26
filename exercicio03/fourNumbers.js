//ler 04 números inteiros e fazer as 04 seguintes operações:
/* 

    - some 25 ao 1° número;
    - triplique o valor do 2° número;
    - modifique o valor do 3° número para 12% do original;
    - armazenar no 4° número a soma dos valores originais dos 3 primeiros números; 

*/

const prompt = require('prompt-sync')();

let firstNumber = parseInt(prompt("1° Número: "));
let secondNumber = parseInt(prompt("2° Número: "));
let thirdNumber = parseInt(prompt("3° Número: "));
let fourthNumber = parseInt(prompt("4° Número: "));

let firstOperation = firstNumber + 25;
let secondOperation = 3 * secondNumber;
let thirdOperation = (12/100) * thirdNumber;
let fourthOperation = firstNumber + secondNumber + thirdNumber + fourthNumber;

console.log("Primeira Operação: ", firstOperation);
console.log("Segunda Operação: ", secondOperation);
console.log("Terceira Operação: ", thirdOperation);
console.log("Quarta Operação: ", fourthOperation);