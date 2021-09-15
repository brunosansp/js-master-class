// Aplicando destructuring em parâmetros de uma função tanto com Arrays quanto com Objetos

// const sum = function (a, b) {
//     return a + b;
// };
// console.log(sum(2, 2));


// com Array
// const sum = function ([a, b]) {
//     return a + b;
// };
// console.log(sum([2, 2]));


// com Objeto
const sum = function ({ a, b }) {
    return a + b;
};
console.log(sum({ a: 2, b: 2 }));