// let regExp = /john@gmail.com/;
// let result = regExp.test("john@gmail.com");
// console.log(result);


/**
 * para escapar um determinado caractere usamos o \
 */
// let regExp = /john.due@gmail\.com/;
// let result = regExp.exec("E-mail: john.due@gmail.com");


/**
 * Iniciar e finalizar com um determinado caractere
 * ^ inicia com um determinado caractere
 * $ termina com um determinado caractere
 */
// let regExp = /^john@gmail.com$/;
// let result = regExp.exec("john@gmail.com");


/**
 * Usando Grupos e Quantificadores
 */
// let regExp = /^[a-z]+@gmail\.com$/;
// let result = regExp.exec("john@gmail.com");


/**
 * Usando Metacaracteres
 */
// let regExp = /^\w+@\w+(\.\w{2,3})+$/;
// let result = regExp.exec("bruno@outlook.com")


/**
 * Usando Grupo de Captura
 */
let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;
let result = regExp.exec("bruno@gmail.com");



console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result.index);
console.log(result.input);




/**
 * Grupos de Caracteres
 * 
 * [abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b e c
 * [^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c
 * [0-9] - Aceita qualquer caractere entre 0 e 9
 * [^0-9] - Não aceita qualquer caractere entre 0 e 9
 * 
 */


 /**
  * Quantificadores
  * 
  * {n} - Quantifica um número específico
  * {n,} - Quantifica um número mínimo
  * {n,m} - Quantifica um número mínimo e um número máximo
  * ? - Zero ou um
  * * - Zero ou mais
  * + - Um ou mais
  * 
  */


  /**
   * Metacaracteres
   * 
   * \w - Representa o conjunto [a-zA-Z0-9_]
   * \W - Representa o conjunto [^a-zA-Z0-9_]
   * \d - Representa o conjunto [0-9]
   * \D - Representa o conjunto [^0-9]
   * \s - Representa um espaço em branco
   * \S - Representa um não espaço em branco
   * \n - Representa uma quebra de linha
   * \t - Representa um tab
   * 
   */

  /**
   * Grupo de Captura
   * 
   * Usado para extrair valores de uma string
   */
