// Clonando objetos

const smartphone = {
    marca : "Apple", 
    modelo : "Iphone 13",
    anoLancamento : 2021, 
    tela : 6.1
}

const MeuCelularNovo = Object.assign ({AnoEmQueComprarei : 2022},smartphone)
console.log(MeuCelularNovo)