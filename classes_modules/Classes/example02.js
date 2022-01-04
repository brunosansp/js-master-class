/**
 * constructor => O construtor é invocado no momento da instanciação de uma classe
 * e serve para inicializar um determinado objeto. 
 */
class Square {
    constructor(side) {
        this.side = side;
    }
}
const square = new Square(4);
console.log(square);