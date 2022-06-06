// Adicionando elementos em array;

let series = ['Agents of Shield', "Locke & Key", "Loki", "WandaVision"]
console.log(series)

// Adicionando informação no primeiro elemento da lista;

series.unshift('Big bang Theory')
console.log(series)

// Adicionando informação no meio da lista;

series.splice(2,0,"Flash")
console.log(series)

// Adicionando informação no final da lista;
series.push('Sombra e ossos')
console.log(series)