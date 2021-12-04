/**
 * Ordena os elementos conforme a função de ordenação
 * 
 * Se o retorno for 0 ou 1 a ordem no array não é alterada, 
 * mas se retornado o valor -1 o array será alterado.
 */

const languages = [
    {
        "name": "Python",
        "year": 1991
    },
    {
        "name": "C",
        "year": 1972
    },
    {
        "name": "Java",
        "year": 1995
    }
]

languages.sort(function (a, b) {
    // return 1;
    // return -1;
    // return a.year - b.year;
    // return b.year - a.year;
    // return (a.name <= b.name) ? -1 : 1;
    // return (a.name > b.bame) ? -1 : 1;

    // Usando localeCompare, uma novidade nas Strings
    // return a.name.localeCompare(b.name); // ordem ascendente
    // return a.name.localeCompare(b.name) * -1; // ordem descendente


})

console.log(languages)