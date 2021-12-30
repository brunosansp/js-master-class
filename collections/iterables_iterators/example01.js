/**
 * São conveções implementadas por Arrays, Maps, Sets e Strings
 * que os tornam iteráveis por meio de u protocolo de iteração.
 */

const languages = ["Fortran", "Lisp", "COBOL"];

// Usando o for tradicional
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}


// Usando for in
for (let i in languages) {
    console.log(languages[i]);
}

// Usando a gunção de Array, forEach
languages.forEach(function (language) {
    console.log(language);
});

// Usando a gunção de Array, forEach com ArrowFunction
languages.forEach((language) => {
    console.log(language);
});

// Usando for of
for (let language of languages) {
    console.log(language);
}