// Desafio_final: Verificar o nome de uma pessoa, quem convidou a pessoa para a festa e confirmar se ela tem autorização para entrar. 

let nomeDaPessoa = ['João', 'Caio', 'Julia','Maria','Donatela'];
let pessoaQueConvida = ['Francisca','Mariana','Marta'];

let nomeConvidado = prompt("Bem vindo a festa, qual o seu nome?"); 
let pessoaQueConvidou = prompt("Quem te convidou?"); 


if (nomeDaPessoa.indexOf(nomeConvidado) != -1 && pessoaQueConvida.indexOf(pessoaQueConvidou) != -1){
    alert("Você pode Entrar!"); 
} else{
    alert("Você não pode Entrar!")
}
