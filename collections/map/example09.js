/**
 * Um object possui protótipo e por isso retorna true em chave e valor mesmo que não existam atribuições
 */
const obj = {};
console.log("toString" in obj);
console.log("valueOf" in obj);

/**
 * Para usar object e evitar esta situação podemos instanciar um novo objeto com Object.create passando null 
 */
const objUndefined = Object.create(null);
console.log(objUndefined);
console.log("toString" in objUndefined);
console.log("valueOf" in objUndefined);

/**
 * Também podemos evitar esta situação usando o Map
 */
const map = new Map();
console.log(map.get("toString"));
console.log(map.get("valueOf"));