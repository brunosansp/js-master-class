/**
 * Neste exemplo realizamos o cálculo da área do retângulo
 * de forma tradicional, podendo deixar a aplicação lenta dependendo da complexidade.
 */
const rectangle1 = {
    x: 10,
    y: 2
};

const rectangle2 = {
    x: 5,
    y: 3
};

function calculateArea(rectangle) {
    const area = rectangle.x * rectangle.y;
    return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));