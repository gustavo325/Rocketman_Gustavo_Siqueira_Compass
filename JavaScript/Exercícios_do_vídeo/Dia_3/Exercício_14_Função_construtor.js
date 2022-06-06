// Função de construtor

function seriado(nome,anoLancamento,melhorPersonagem){
     this.nome = nome, 
     this.anoLancamento = anoLancamento, 
     this.melhorPersonagem = melhorPersonagem
}

let MinhaSerie = new seriado("WandaVision", 2021, "Wanda")
console.log(MinhaSerie)