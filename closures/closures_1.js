const obj1 = {}
// for (let v1 = 0; v1 < 3; ++v1) {
//     console.log(v1)
// }



// for (let v1 = 0; v1 < 3; ++v1) {
//     obj1[v1] = function () {
//         console.log(v1)
//     }
// }
// console.log(obj1)
// //Aqui podemos invocar individualmente cada função
// obj1[0]();
// obj1[1]();
// obj1[2]();



// for (let v1 = 0; v1 < 3; v1++) {
//     obj1[v1] = (function (v2) {
//         return function () {
//             console.log(v2);
//         };
//     })(v1);
// }
// obj1[0]();
// obj1[1]();
// obj1[2]();



for (let v1 = 0; v1 < 3; v1++) {
    obj1[v1] = (function () {
            console.log(this.v2);
        }).bind({ v2: v1});
}
obj1[0]();
obj1[1]();
obj1[2]();