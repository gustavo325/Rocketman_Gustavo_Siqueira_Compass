// Criar função que retorna a soma de todos os múltiplos de 3 e 5; 

//Passo a passo surgerido: 
// 1º Armazenar os múltiplos de 3; 
// 2º Armazenar os múltiplos de 5; 
// somar os dois 

let escopoValor = 10
function somarMultiplos(escopoValor){
    let valorTotal = 0;
    for(let i = 1; i <= escopoValor; i++){
        if(i % 3 === 0 || i % 5 === 0){
            valorTotal += i
} 
} console.log(valorTotal)
}
somarMultiplos(12)

