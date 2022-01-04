/**
 * Classes são um tipo especial de função.
 * Atuam como template para criação de objetos.
 * Muito similares as funções construtoras.
 * 
 * As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.
 * 
 * OBS1: As class declaration, assim como as function declaration, tem seu nome iniciado com letra maiúscula.
 * 
 * OBS2: Diferente das funções as classes não sofrem o processo de hoisting, não sendo pré inicializadas.
 */


class Square {

}
console.log(typeof Square);

const square = new Square();
console.log(square);

// class expression
// const Square = class {

// }
