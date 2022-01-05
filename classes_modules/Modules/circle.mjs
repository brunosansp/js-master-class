/**
 * Para utilizar modules no NodeJS os arquivos devem ter a extensão .mjs
 * além de executar com a flag --experimental-modules
 * 
 * Os imports não podem ser feitos dentro de um bloco de código, pois não sofrem hoisting e,
 * por isso devem estar como top level, ou seja, precisam ser importados no topo do código.
 * 
 * Podemos dar novos nomes as variáveis importadas, também conhecido como alias.
 * Ex => PI as pi
 * 
 */
import { PI, pow } from './math.mjs';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);