/**
 * map: Retorna um novo array com base no retorno da função passada por parâmetro
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


const result = frameworks.map(function (framework) {
    return framework.name;
})
console.log(result)

const resultWithArrowFunction = frameworks.map((framework) => framework.contributors)
console.log(resultWithArrowFunction)
