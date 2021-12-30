const languages = [["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]];
console.log(languages);

// Criando o array com Map
const mapLanguages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
console.log(mapLanguages);

// Usando o for of no Map
for (let language of mapLanguages) {
    console.log(language);
}

// Usando for of e destructuring no Map
for (let [language, year] of mapLanguages) {
    console.log(language, year);
}

// Usando for of e spread operator no Map
for (let [...language] of mapLanguages) {
    console.log(language);
}