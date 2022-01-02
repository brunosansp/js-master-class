/**
 * static methods => Não dependem de uma instância para serem invocados.
 */

class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }
}
const square = Square.fromArea(16);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());