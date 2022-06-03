// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto
// Fórmula Math.floor()
// caso pontos maior que 12 -> "carteira suspendida"


function verificarVelocidade(velocidade){
    let diferenca;
    let pontos;
    if(velocidade > 70) {
        diferenca = velocidade - 70;
        pontos = diferenca/5;
        pontos > 12 ? console.log("Carteira suspensa,", "total de pontos:", pontos): console.log(Math.floor(pontos));
} else {
    console.log("Tudo Ok!!!")
}
}

verificarVelocidade(120)