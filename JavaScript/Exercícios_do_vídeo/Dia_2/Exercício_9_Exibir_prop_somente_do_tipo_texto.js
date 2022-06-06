// Criar um método para ler propriedades de um objeto e exisibr somente as que são do tipo string;

let series = {nome: "Agents of Shield", lancamento: 2013, final:2020, melhorPersonagem: "skye/Tremor", melhorTemporada: 4}

function exibirSomenteTexto(objeto){
    for(seriado in series){
        if(typeof series[seriado] === 'string'){
            console.log(seriado, series[seriado])
        }
    }
}

exibirSomenteTexto(series)