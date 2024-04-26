/* 
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let primeNumbersQuantity = 0;
let isPrimeNumber = false;
let number = 101;
let i;

while (primeNumbersQuantity < 50) {

    isPrimeNumber = true;

    i = 2;
    
    while(i <= Math.sqrt(number)){ 
        
    // No contexto de encontrar números primos, o "Math.sqrt(number)" é frequentemente utilizada para otimizar o processo de verificação de primalidade. 
    //Quando procuramos os divisores de um número para determinar se ele é primo, só precisamos verificar até a sua raiz quadrada. 
    //Isso ocorre porque, se houver um divisor maior que a raiz quadrada, também haverá um fator correspondente menor que a raiz quadrada.

        if(number % i === 0) {
            isPrimeNumber = false;
        }

        i++;

    }

    if(isPrimeNumber){
        console.log(`${primeNumbersQuantity}: ${number}.`);
        primeNumbersQuantity++;
    }

    number++;

}