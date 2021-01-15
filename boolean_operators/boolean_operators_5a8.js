function generateSerial(max) {
    return Math.floor(Math.random() * max)
}

console.log(generateSerial(1000))
console.log(generateSerial(100))
console.log(generateSerial(10))


/**
 * Questão, e se quisermos passar um valor default no caso de max vier vazio?
 * 
 * Veremos 3 exemplos abaixo...
 */

// exemplo 1
function generateSerialE1(maxE1){
    if(maxE1 == undefined) {
        max = 1000
    }
    return Math.floor(Math.random() * maxE1)
}
console.log('maxE1:::: ', generateSerialE1(1000))
console.log('maxE1:::: ', generateSerialE1())


// exemplo 2
function generateSerialE2(maxE2) {
    if (!maxE2) {
        maxE2 = 1000
    }
    return Math.floor(Math.random() * maxE2)
}
console.log('maxE2:::: ', generateSerialE2(1000))
console.log('maxE2:::: ', generateSerialE2())


// exemplo 3
function generateSerialE3(maxE3) {
    maxE3 = maxE3 || 1000 
    return Math.floor(Math.random() * 1000)
}
console.log('maxE3:::: ', generateSerialE3(1000))
console.log('maxE3:::: ', generateSerialE3())

/**
 * o maxE3 neste caso é 0(zero) e está sendo colocado em situação booleana e como 0 é false ele não retorna,
 * fazendo com que retorne o valor a direita.
 */