// Combinação de array;
// Primeiro: [1,2,3]
// Segundo: [4,5,6]
// Resultado solicitado no exercício do vídeo: [1,2,3,%,4,5,6]

let numeros = [1,2,3]; 
let letras = [4,5,6];

// Spread;

let junto = [...numeros,'%',...letras]
console.log(junto)