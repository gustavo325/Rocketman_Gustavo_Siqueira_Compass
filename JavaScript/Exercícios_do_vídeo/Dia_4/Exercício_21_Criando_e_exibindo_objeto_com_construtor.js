// Objeto postagem de Blog; 
// Criar um objeto de postagem de blog, com construtor, que vai conter: 
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

function Itens(titulo, mensagem, autor, visualizacoes, [autor2, mensagem2]){
    this.titulo = titulo;
    this.mensagem = mensagem; 
    this.autor = autor; 
    this.visualizacoes = visualizacoes; 
    this.comentarios = [autor2 , mensagem2]; 
    this.estaAoVivo = true;
}
let resultado = new Itens("Blog","teste","Eu",0,["eu testando de novo",'espero que de certo']); 
console.log(resultado);