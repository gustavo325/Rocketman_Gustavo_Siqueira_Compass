// Exemplo de template literal, string concatenada sem símbolos, através do template `` 

let nome = 'Gustavo Henrique'
let empresa = 'Compass.uol'
let data = new Date(2022, 06,18,10,30)

let mensagem = 
`Olá ${nome}, 
primeiramente gostariamos de agradecer a sua participação no programa de Bolsas pela ${empresa}, 
e gostariamos de informar que a partir de ${data}, você estará se tornando um compasser. 
Parabéns!!! Estamos muito felizes por ter você em um de nossos times além de poder fazer parte do seu crescimento profissional.
OBS: ESSA MENSAGEM É SOMENTE UMA PREVISÃO DO FUTURO!!!`
console.log(mensagem)