// Criar uma função que teste todas as condições abaixo
// Divisível por 3 --> Fizz
// Divisível por 5 --> Buzz
// Divisível por 3 e 5 --> FizzBuzz
// Não divisível por 3 ou 5 --> Valor inserido
// Não é um número --> "Não é um número"


function FizzBuzz(numero){
    if (typeof numero !== 'number'){
        return "Não é um número"
    }
    if (numero % 3 === 0 && numero % 5 !== 0){
        return "Fizz"
    }
    if (numero % 5 === 0 && numero % 3 !== 0){
        return "Buzz"
    }
    if (numero % 3 !== 0 && numero % 5 !== 0){
        return numero
    } else {
        return "FizzBuzz"
    }

}

let resposta = FizzBuzz(3); 
console.log(resposta)