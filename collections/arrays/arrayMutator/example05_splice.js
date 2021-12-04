/**
 * Usando o splice
 * 
 * Ele remove, substitui ou adiciona um ou mais elementos em uma determinada posição
 * 
 * O splice é indicado para ser usado no lugar do operador delete
 * 
 */

const languages = ["Python", "C", "Java"]
console.log(languages)

/**
 * O primeiro número indica o index e o segundo número indica a quantidade de elementos a serem excluídos
 */
// console.log("Removendo do index 1 apenas 1 elemnto =>", languages.splice(1, 1))
// console.log(languages)


/**
 * Exemplo de substituição de elemento e adição de mais um
 */
console.log("Substituindo no index 1 e add mais um elemento =>", languages.splice(1, 1, "C++", "C#"))
console.log(languages)

// ARRAY MUTATOR API => 6min 47segd
