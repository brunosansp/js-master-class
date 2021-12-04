/**
 * Usando o push
 * 
 * O push adiciona o elemento no final do array
 * 
 * Ao adicionar um novo elemento o length já reflete a nova quantidade
 */
const languages = ["C", "Python", "Java"]
console.log("Array inicial => ", languages)
console.log("Length do array inicial => ", languages.length)

console.log("Imprindo length ao add novo elemento => ", languages.push("Ruby"))
console.log("Imprindo length ao add novo elemento => ", languages.push("Go"))

console.log("Novo array de languages após add elementos => ", languages)
