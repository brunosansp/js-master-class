/**
 * Ao utilizar setters é necessário diferenciar o nome da função e da propriedade.
 * exemplo: adicionando o _ ao referenciar a função no this
 */
const rectangle = {
    set x(x) {
        this._x = x;
    },
    set y(y) {
        this._y = y;
    },
    get area() {
        return this._x * this._y;
    }
};
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);