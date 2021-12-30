const classicLanguages = ["Fortran", "Lisp", "COBOL"];

const modernLanguages = ["Python", "Ruby", "JavaScript"];

// No intuito de juntar os arrays podemos usar a operação concat do Array
const languages = classicLanguages.concat(modernLanguages);
console.log(languages);

// Usando spread operator
const languagesSpread = [...classicLanguages, ...modernLanguages];
console.log(languagesSpread);