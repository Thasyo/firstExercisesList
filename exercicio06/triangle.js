/* 
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)

Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)

Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) 

*/

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt("Lado A do triângulo: "));
let ladoB = parseFloat(prompt("Lado B do triângulo: "));
let ladoC = parseFloat(prompt("Lado C do triângulo: "));

if ((ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) && (ladoC < (ladoA + ladoB))) {

    console.log("É possível formar um triângulo.");

    if ( ((ladoA === ladoB) && (ladoA !== ladoC || ladoB !== ladoC)) || ((ladoB === ladoC) && (ladoB !== ladoA || ladoC !== ladoA)) || ((ladoA === ladoC) && (ladoA !== ladoB || ladoC !== ladoB)) ) {

        console.log("Tipo do Triângulo: Isósceles.");

    }

    if ((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoA !== ladoC)) {

        console.log("Tipo do Triângulo: Escaleno.");

    }

    if ((ladoA === ladoB) && (ladoB === ladoC) && (ladoA === ladoC)) {

        console.log("Tipo de Triângulo: Equilátero.");

    }

} else {
    
    console.log("Não é possível formar um triângulo.");

}