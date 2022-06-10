// Objeto postagem de Blog; 
// Criar um objeto de postagem de blog que vai conter as seguintes propriedades: 
// Postagem; 
/* 
titulo
mensagem
autor 
visualizacoes
comentarios
    (autor,mensagem)
estaAoVivo
*/

let requisitos = {
    titulo : "Blog",
    mensagem : "oi", 
    autor : "Eu", 
    visualizacoes : 2,
    comentarios : [
        {autor : "Eu de novo", mensagem : "Esqueci o que eu ia escrever..."}, 
        {autor : "Eu novamente", mensagem : "Agora eu lembrei... Quero ser um Compasser ;)"}
    ],
    estaAoVivo : true, 
    }
console.log(requisitos)