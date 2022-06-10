// Criar um objeto endereço, que contenha, rua, cidade, CEP, ExibirEndereco

let endereco = {
    Rua: "Agamenon Magalhães",
    Cidade : "Recife",
    CEP : "52010-075",
    }

function mostrar(endereco){
    for (valor in endereco){
        console.log(endereco[valor])
    }
}
mostrar(endereco)