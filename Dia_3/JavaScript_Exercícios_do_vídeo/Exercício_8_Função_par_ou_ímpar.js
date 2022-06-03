// Receber uma quantidade de valores para avaliar e exibe se o valor dizendo se é par ou ímpar.


function exibirTipoNumerico(ate){
    for (let i = 0; i <= ate; i++ ){
        if(i % 2 == 0){
            console.log(i,"par")
        } else {
            console.log(i, "Ímpar")
        }
    }
} 
exibirTipoNumerico(15)