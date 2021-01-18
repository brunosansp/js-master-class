//symbol_4.js
let regexp = /JavaScript/;
//passando .match para desativar
regexp[Symbol.match] = false;
console.log('/JavaScript/'.startsWith(regexp));