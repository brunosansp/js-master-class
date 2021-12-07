/**
 * find: Retorna o primeito elemento que retornou true na função passada por parâmetro
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


const result = frameworks.find(function (framework) {
    return framework.name === "Vue.js";
})
console.log(result)
