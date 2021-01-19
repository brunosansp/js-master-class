// let regExp = /john@gmail.com/;
// let result = regExp.test("john@gmail.com");
// console.log(result);

let regExp = /john.due@gmail.com/;
let result = regExp.exec("john.due@gmail.com")

 // colocando o \ para escapar o .
// let result = regExp.exec("john\.due@gmail.com");

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);