//Notaçao Literal

const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "languages";
const key5 = "available";

/**
 * Dessa forma utilizamos referência para buscar o valor das chaves.
 */

const book = {
    [key1]: "Clean Code",
    [key2]: "Robert Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
};
console.log(book);