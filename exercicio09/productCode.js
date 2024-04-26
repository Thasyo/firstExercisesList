/* 
Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo.
*/

const prompt = require('prompt-sync')();

let code = parseInt(prompt("Código de origem: "));

switch(code){
    case 1:
        console.log("Região Sul.");
        break;
    case 2:
        console.log("Região Norte.");
        break;
    case 3:
        console.log("Região Leste.");
        break;
    case 4:
        console.log("Região Oeste.");
        break;
    case 5: case 6: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48:  case 49: case 50:
        console.log("Região Nordeste.");
        break;
    case 7: case 8: case 9:
        console.log("Região Sudeste.");
        break;
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20:
        console.log("Região Centro-Oeste.");
        break;
    default:
        if(code < 1) {
            console.log("Produto Importado.");
        }

        if(isNaN(code)) {
            console.log("Erro! Código Inválido.");
        }
        
        break;
}