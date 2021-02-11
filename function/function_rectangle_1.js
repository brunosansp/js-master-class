// const rectangle = {
//     x: 10,
//     y: 2,
//     calculate() {
//         return this.x * this.y;
//     }
// };
// console.log(rectangle.calculate());



const calculateArea = function() {
    return this.x * this.y;
};

const rectangle = {
    x: 10,
    y: 2,
    calculateArea
};
console.log(rectangle.calculateArea());