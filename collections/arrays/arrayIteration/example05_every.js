/**
 * every: Diferente do some que retorna true se ao menos um elemento for true, o every retorna true somente se todos os
 * elementos forem true
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


const result = frameworks.every(function (framework) {
    return framework.contributors > 1000;
})
console.log(result)
