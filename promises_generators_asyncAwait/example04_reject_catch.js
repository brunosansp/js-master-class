/**
 * Ao usarmos o reject é necessário fazer o tratamento de erros via catch
 * logo após o bloco do then.
 */
function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input.");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}
// Simulando erro ao remover os inputs das chamadas de sum
// sum(2, 2).then(function (a) {
sum().then(function (a) {
    // sum(4, 4).then(function (b) {
    sum().then(function (b) {
        // sum(a, b).then(function (result) {
        sum().then(function (result) {
            console.log(result);
        }).catch(function (e) {
            console.log(e);
        });
    }).catch(function (e) {
        console.log(e);
    });
}).catch(function (e) {
    console.log(e);
});