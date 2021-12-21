/**
 * A operação set adiciona um par de chave e valor
 */
const timeUnits = new Map();

timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log("Operação set ::", timeUnits);
console.log(timeUnits.size)