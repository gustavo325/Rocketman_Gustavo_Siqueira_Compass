// Exercício Nota Escolar. Obter a média a partir de um array... 

// 0-59: F
// 60-69: D
// 70-79: C 
// 80-89: B
// 90-100: A 

const notas = [60,95,90];

function mediaAluno(valor){
    let somatorio = 0;
    
    for(prova of valor){
        somatorio += prova
    } let media = somatorio/valor.length;
    return media
}

function classificacao(media){
    if(media <= 59){
        return "A média do aluno foi F"

    } else if(media >= 60 && media <=69){
        return "A média do aluno foi D"

    } else if(media >= 70 && media <=79){
        return "A média do aluno foi C"

    } else if(media >= 80 && media <=89){
        return "A média do aluno foi B"

    } else {
        return "A média do aluno foi A"
    }
}
console.log(classificacao(mediaAluno(notas)));