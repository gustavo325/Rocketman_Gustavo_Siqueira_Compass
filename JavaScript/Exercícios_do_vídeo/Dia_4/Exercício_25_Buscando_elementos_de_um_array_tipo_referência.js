// Encontrando elementos em array tipo referência;

let compras = [{compra1 : 'Carro'}, {compra2 : 'Smartphone'}, {compra3 : "Casa"}]; 
console.log(compras)


let item = compras.find(function(item){
    return item.compra2 === 'Smartphone';
})
console.log(item)

// Utilizando Função de seta... 
// Basicamente essa forma faz a mesma coisa do exemplo acima, send que com menos linhas de código... 

// Forma que eu fiz... 
let teste = compras.find(teste => {return teste.compra2 === "Smartphone"})
console.log(teste)

// Forma como está no vídeo... 
let teste2 = compras.find((teste2 => teste2.compra2 === "Smartphone"))
console.log(teste)