/* 
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require('prompt-sync')();

let value;

do {
    
    value = parseFloat(prompt("Valor: "));

    if(value < 0 || isNaN(value)){
        return;
    }

    if (value % 2 == 0) {
        console.log(`${value} é PAR.`);
    } else {
        console.log(`${value} é ÍMPAR.`);
    }

} while (value >= 0);

