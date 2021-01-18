// symbol_1.js
Symbol('a');
Symbol('b');
Symbol('c');

/** Os Symbol nunca serão iguais, cada um é único. */
// symbol_2.js
Symbol("a") == Symbol("a");
Symbol("b") == Symbol("b");
Symbol("c") == Symbol("c");


// symbol_3.js
