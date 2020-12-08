// Teste de performance comparando com o conteúdo do arquivo string_4.js
let counter = 0;
console.time('performance')
while(counter < 100000) {
    new String('JavaScript');
    counter++;
}
console.timeEnd('performance');