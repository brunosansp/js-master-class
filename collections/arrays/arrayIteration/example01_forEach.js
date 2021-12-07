/**
 * forEach: Executa a função passada por parâmetro para cada elemento
 */

const frameworks = ["React.js", "Angular", "Vue.js"]
console.log(frameworks)

frameworks.forEach(function (framework) {
    console.log(framework)
})

// usando arrow function
frameworks.forEach((framework) => console.log(framework)) // por ser apenas uma linha de retorno podemos remover o bloco de { }