/**
 * Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo.
 */

function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        }
    });
}
const languages = new createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);

// CONTINUAR AOS 6min57seg => delete property