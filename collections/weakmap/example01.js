/**
 * Similar ao Map, mas permite apenas chaves do tipo Object e mantém
 * as referências de forma fraca. Sendo volátil e não iterável.
 * 
 * O uso do Map pode causar Memory Leaks ocorrendo vazamento de memória, por isso foi criado o WeakMap, com o intuito de facilitar
 * ao garbage collection (Coletor de lixo), faça o trabalho de limpeza corretamente de dados não mais necessários.
 * 
 * CAUTION: Sem a referência para a chave não é possível acessar o valor.
 * 
 * Caso de uso:
 * 
 * Operações:
 * set => Adiciona um par de chave e valor
 * has => Retorna true se a chave existir
 * get => Retorna o valor de uma determinada chave
 * delete => Remove um par de chave e valor
 */

const wm1 = new WeakMap();
console.log(wm1);

const obj1 = {}; // somente chaves do tipo Object
const obj2 = {};

// teste a criação dos objetos como a baixo e verá o erro
// const obj1 = "key1"; 
// const obj2 = "key2";

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1.has(obj1));
console.log(wm1.get(obj1), obj2);

console.log(wm1.delete(obj1));
console.log(wm1.has(obj1), wm1.has(obj2));
