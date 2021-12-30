const languages = new Set(["Fortran", "Lisp", "COBOL"]);
console.log(languages);

for (let language of languages) {
    console.log(language);
}

// Usando spread operator com Set
console.log([...languages]);