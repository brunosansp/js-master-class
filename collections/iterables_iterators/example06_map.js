/**
 * Todo Iterable tem uma propriedade de chave
 * Symbol.iterator que define o protocolo de
 * iteração para o objeto
 * 
 * Obs: Iterator é um Design Pattern descrito no livro
 * Gang of Four
 */

const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());