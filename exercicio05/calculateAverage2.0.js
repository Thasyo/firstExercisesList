//Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

const prompt = require('prompt-sync')();

let note01 = parseFloat(prompt("Nota da 1° avaliação: "));
let note02 = parseFloat(prompt("Nota da 2° avaliação: "));

let average = (note01 + note02) / 2;

if (average >= 6.00) {
    console.log("Média: ", average);
    console.log("PARABÉNS! Você foi aprovado!");
} else {
    console.log("Média: ", average);
    console.log("Você foi REPROVADO! Estude mais");
}