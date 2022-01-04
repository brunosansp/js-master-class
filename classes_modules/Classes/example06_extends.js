/**
 * Criando hierarquia de classes usando a palavra-chave extends.
 * 
 * OBS: Ao declarar um construtor na subclass é necessário invocar o constructor da superclass
 * por meio do super() antes de utilizar a referência this.
 */
class Shape {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`;
    }
}
const square = Square.fromArea(16);
console.log(square.toString());
console.log(square.calculateArea());

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }
}
// const circle = new Circle(10);
const circle = Circle.fromArea(314.1592653589793);
console.log(circle.toString());
console.log(circle.calculateArea());