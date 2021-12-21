/**
 * O has retorna um boolean (true ou false) se a chave existir
 */
const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600)
console.log(timeUnits.has("hour"));
console.log(timeUnits.has("day"));
