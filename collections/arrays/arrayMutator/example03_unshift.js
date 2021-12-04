/**
 * Usando o unshift
 * 
 * O unshift adiciona o elemento no início do array
 * 
 * Ao adicionar um novo elemento o length já reflete a nova quantidade
 */
const languages = ["C", "Python", "Java"]
console.log("Array inicial => ", languages)
console.log("Length do array inicial => ", languages.length)

console.log("ADD elemento no início da fila => ", languages.unshift("Ruby"))
console.log("ADD elemento no início da fila => ", languages.unshift("Go"))

console.log("Novo array de languages após add elementos => ", languages)
console.log("Length do array após add elementos => ", languages.length)
