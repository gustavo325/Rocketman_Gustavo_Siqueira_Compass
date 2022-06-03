// Criar uma função que exibe a quantidade de * que a linha possui... 



function mostrarCaractere(qtde){
    let caractere = '*';
    for(i = 1; i <= qtde; i++){
        console.log(caractere)
        caractere += '*'
    }
}
mostrarCaractere(30)