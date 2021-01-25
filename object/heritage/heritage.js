// Herança
const functionalLanguage = {
    paradigm: "Functional"
};

const scheme = {
    name: "Scheme",
    year: 1975,
    paradigm: functionalLanguage.paradigm
};

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};

console.log(functionalLanguage);
console.log(scheme);
console.log(javascript.__proto__);
console.log(javascript.paradigm);