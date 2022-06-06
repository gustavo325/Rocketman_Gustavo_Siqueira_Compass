// Factory Functions

function seriado(nome,anoLancamento,melhorPersonagem){
    return {
        nome, 
        anoLancamento,
        melhorPersonagem,
        
    }
}

let meuSeriado = seriado("Agents_Of_Shield",2013,"Skye/Tremor")
console.log(meuSeriado)