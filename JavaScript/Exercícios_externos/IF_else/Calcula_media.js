// Questão: Faça um script que calcula a média de duas notas de um aluno. Em seguida ele deve dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.


// Criação das variáveis
let nota1 = 9; 
let nota2 = 9.5;

let media = (nota1+nota2)/2
console.log( "A média do aluno foi", media)

if(media >= 7 && media < 10){
    console.log("Aprovado")
} else if (media == 10)
{
    console.log("Aprovado com Distinção")
} else {
    console.log("Reprovado")
}