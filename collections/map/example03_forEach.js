/**
 * forEach faz a iteração
 * 
 * Obs: É importante lembrar que o forEach vai pegar primeiro o valor e depois a chave
 */
const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600)
console.log(timeUnits);

// modo errado, os dados serão exibidos invertidos
timeUnits.forEach((key, value) => {
    console.log(key, value);
});

// modo correto de uso
timeUnits.forEach((value, key) => {
    console.log(key, value);
});