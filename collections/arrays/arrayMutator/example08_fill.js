/**
 * O fill preenche os elementos de acordo com a posição de início e fim
 * 
 * Ex: fill(elemento, posiçãoInicial)
 */

const languages = ["Python", "C", "Java"]
console.log(languages);

languages.fill("Javascript") // passando somente o elemento como parâmetro todo o array será preenchido com este elemento
console.log(languages)

languages.fill("C#", 1) // passando o elemento mais um index inicial, o array será preenchido com o novo elemento a partir deste index até o último
console.log(languages)


languages.fill("Ruby", 0, 2) // passando o elemento mais um index inicial e um final, o array será preenchido com o novo elemento entre os indexs passados -1
console.log(languages)