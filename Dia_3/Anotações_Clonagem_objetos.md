#### Clonagem de objetos

-----

const celular = {

marcaCelular : 'Asus',

tamanhoTela : {

vertical: 155, 

horizontal: 75

}, 

ligar: function () {

console.log("Fazendo Ligação...");

}

}

const novoObjeto = Object.assign({

bateria: 5000;

}, celular); **// Esse comando, copia os objetos de celular e acrescenta a propriedade bateria com valor 5000, no novoObjeto.**

-----

Outra forma de clonar...

**const objeto2 = {...celular};**

#### Referência bibliográfica: 

---------

https://www.youtube.com/watch?time_continue=9807&v=i6Oi-YtXnAU&feature=emb_logo