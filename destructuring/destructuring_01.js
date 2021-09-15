// Extraindo valores de um Array
const language = "C; Dennis Ritchie; 1972".split(";");

// const [name, author, year] = language;

// delimitando o espaço
// const [, author, year] = language;

const [name = "-", author = "-", year = "-",] = language;

console.log(author, year);
