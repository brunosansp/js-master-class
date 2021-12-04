/**
 * Propriedade length
 * Verifica a quantidade de elementos dentro do array
 */
const languages = []
languages[0] = "Python"
languages[1] = "C"
languages[2] = "Java"

console.log(languages)
console.log(languages.length)


/**
 * Elementos vazios dentro do Array não são considerados no length
 * Por isso não é recomendado usar o operador delete
 * 
 * Perceba que o length continua apresentando 3 elementos mesmo após a utilização do delete
 * 
 * Exemplo:
 */

// delete languages[1]
// console.log("Após operador delete => ", languages)
// console.log("O length após operador delete => ", languages.length)


/**
 * Criar array com elementos espaçados também fará com que o length seja exibido de forma errada
 * 
 * Exemplo: O length neste caso irá informar 21 posições, e não 3 elementos
 */
const spaceBetweenLanguages = []
spaceBetweenLanguages[0] = "Python"
spaceBetweenLanguages[10] = "C"
spaceBetweenLanguages[20] = "Java"
console.log("Array com elementos espaçados => ", spaceBetweenLanguages)
console.log("Length total de spaceBetweenLanguages => ", spaceBetweenLanguages.length)
