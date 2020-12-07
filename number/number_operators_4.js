// Operadores bit-a-bit
// toString(2) converte para binário
// padStart é uma das operações do String
// padStart(32, 0) imprime 32 caracteres

4 | 3;
console.log('Entendendo o 4 | 3 retornando 7');
(4).toString(2).padStart(32, 0);
(3).toString(2).padStart(32, 0);
//(4) resulta em binário ('00000000000000000000000000000100')
//(3) resulta em binário ('00000000000000000000000000000011')
//Da direita para a esquerda temos 0 com 1 que dá 1
//Depois 0 com 1 que dá 1
//Depois 1 com 0 que dá 1
//Neste caso o resultado binário é 111 que convertido para decimal resulta em 7
//Se digitarmos 0b111 no terminal NodeJS podemos confirmar este resultado


3 & 1;
console.log('Entendendo o 3 & 1 retornando 1');
(3).toString(2).padStart(32, 0);
// '00000000000000000000000000000011'
(1).toString(2).padStart(32, 0);
// '00000000000000000000000000000001'
//Testando no terminal NodeJS 0b1


5 ^ 2; // resulta em 7
(5).toString(2).padStart(32, 0);
// '00000000000000000000000000000101'
(2).toString(2).padStart(32, 0);
// '00000000000000000000000000000010'
// No terminal NodeJS 0b111


~2;
console.log('Entendendo o ~2 retornando -3');
(-3 >>> 0).toString(2).padStart(32, 0);
// '11111111111111111111111111111101'
(2).toString(2).padStart(32, 0);
// '00000000000000000000000000000010'
// Ler sobre Aritmética binária, complemento de 1 e 2


4 << 2; // retorna 16
(4).toString(2).padStart(32, 0);
// '00000000000000000000000000000100'
(16).toString(2).padStart(32, 0);
// '00000000000000000000000000010000'
// Simplificando: É como se multiplicasse sucessivamente por 2

128 >> 1;
// Simplificando: É como se dividisse sucessivamente por 2

-2 >>> 1; // resulta em 2147483647
(-2 >>> 0).toString(2).padStart(32, 0);
// '11111111111111111111111111111110'
(2147483647).toString(2).padStart(32, 0);
// '01111111111111111111111111111111'


// | OR (compara bit-a-bit, onde o resultado entre 0 e 1 dá 1)
// & AND (retorna 1 apenas se a comparação binária for 1 e 1)
// ^ XOR (o "ou exclusivo", apenas 1 com 0 retorna 1)
// ~ NOT (inverte os bits, incluindo os bits de sinal)
// << SHIFT (deslocamento de bits com mudança de sinal)
// >> SHIFT (deslocamento de bits com mudança de sinal)
// >>> ROTAÇÃO