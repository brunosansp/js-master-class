const book = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 464,
    languages: "English",
    available: true
};
console.log("Publisher:", book.publisher); // o retorno é undefined

/**
 * O undefined acontece quando uma propriedade siquer existe.
 * Já o null acontece quando a propriedade existe mas não possui valor.
 * 
 * Veja a baixo exemplos com retornos booleanos:
 */

console.log("title" in book);
console.log("author" in book);
console.log("pages" in book);
console.log("languages" in book);
console.log("available" in book);
console.log("publisher" in book);


/** Para deletarmos uma propriedade: */
delete book.available;
console.log(book);
console.log("available" in book);