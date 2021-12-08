/**
 * reduce: Retorna um valor com base no retorno da função passada por parâmetro
 * 
 */

const frameworks = [
    {
        name: "Angular.js",
        contributors: 1548
    },
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    },
]
console.log(frameworks)


const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 0) // Aqui inicializamos o parâmetro total
console.log(result)

