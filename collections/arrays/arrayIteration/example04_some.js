/**
 * some: Retorna true se um ou mais elementos retornaram true na função passada por parâmetro
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


const result = frameworks.some(function (framework) {
    return framework.name.includes("js");
})
console.log(result)
