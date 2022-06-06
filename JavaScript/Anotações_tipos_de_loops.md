### Loops em Javascript

- For

  ​	Estrutura: 

  ​	for(let i = 0; i <5; i++){

  ​	console.log("teste")

  } 

  // O resultado dessa operação é o nome "teste" impresso 5 vezes. 

- While

  ​	Estrutura: 

  ​	let i = 0; 

  ​	while (i <= 5) {

  ​	console.log(i)

  ​	i++

  } 

  // O resultado dessa operação é uma contagem de 0 até 4;

- Do.. While

  ​	Estrutura: 

  ​	let i= 0

  ​	do { 

    	console.log(i);
  	
    	 i++

  ​	} while (i <15)

  // O resultado dessa operação é uma contagem de 0 até 14;

  *** A diferença para o while é que nessa função o código será executado no mínimo uma vez ***

- For.. In

  Estrutura: 

    const pessoa = {

    nome: "Gustavo",

    idade: 25

  }; 

  for (let chave in pessoa){

    console.log(pessoa[chave]);

  } 

  // Chave se refere a propriedade nome e idade. 

  Exemplo²: 

  const objetos = ['Carro', 'notebook','smartphone']

  for (let indice in objetos){

  console.log(indice,objetos[indice])

  }

  // Nesse exemplo o indice, será referente a posição do objeto da lista, enquanto que objetos será referente a todos os itens que estiverem dentro da variável objetos.

- For.. Of

  Estrutura: 

  const animais = ['coelho', 'cachorro', 'pato']

  for (let animal of animais){

  ​	console.log(animal)

  }

  // O resultado será a impressão do nome de cada animal da lista. É importante destacar que esse loop é o mais adequado para percorrer listas. 

  ### Referência bibliográfica
  
  https://www.youtube.com/watch?time_continue=5736&v=i6Oi-YtXnAU&feature=emb_logo