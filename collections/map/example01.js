/**
 * Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser
 * de qualquer tipo de dado
 */

const timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);
console.log(timeUnits);

console.log("Convertendo para array ::", Array.from(timeUnits));

console.log("Propriedade size ::", timeUnits.size);