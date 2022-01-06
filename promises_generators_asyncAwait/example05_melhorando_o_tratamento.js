function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input.");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}
console.time("Performance")
sum(2, 2).then(function (a) {
    // encadeando a função sum
    return sum(4, 4).then(function (b) {
        // sum().then(function (result) {
        return sum(a, b).then(function (result) {
            console.log(result);
            console.timeEnd("Performance");
        });
    });
}).catch(function (e) {
    console.log(e);
});