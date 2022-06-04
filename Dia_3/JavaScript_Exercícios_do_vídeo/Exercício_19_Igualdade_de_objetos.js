// Igualdade de Objetos; 

function endereco(rua,cep,cidade){
    this.rua = rua; 
    this.cep = cep;
    this.cidade = cidade;
}
let enderecoA = new endereco("teste","teste","teste"); 
let enderecoB = new endereco('teste',"teste","teste"); 

function saoIguais(enderecoA,enderecoB){
    for(valor in enderecoA){
        for (i in enderecoB){
            if(enderecoA[valor] === enderecoB[i]){
                console.log("Os endereços são iguais")
            } else {
                console.log("Os enderenços são diferentes")
            }
        }
    }
}
saoIguais(enderecoA,enderecoB)