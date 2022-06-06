// Encontrando elementos em array tipo primitivo;

let series = ['Agents of Shield', "Locke & Key", "Loki", "WandaVision"];
console.log(series);

// Bucando um valor existente dentro do array;
console.log(series.indexOf('WandaVision'));

// Buscando um valor que não está no array; 
console.log(series.indexOf("Os simpsons"));


// Esse método determina se um array possui determinado elemento ou não, retornando True caso possua e False caso não possua;
console.log(series.includes("Locke & Key"));

// Buscando um elemento que não está presente no array com o includes; 
console.log(series.includes("Arrow"));