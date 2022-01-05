/**
 * A Reflect API tem os mesmos métodos que existem no Proxy, permitindo a execução de diversos tipos 
 * de operações no objeto alvo.
 */

function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            Reflect.set(target, key, value);
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/\d+/)) {
                if (!(Reflect.has(target, key))) {
                    throw `Property ${key} not found.`;
                }
            }
            return target[key];
        },
        deleteProperty(target, key) {
            if (Reflect.has(target, key)) {
                target.length--;
                Reflect.deleteProperty(target, key);
            }
        }
    });
}
const languages = new createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);

// Teste após implementação do deleteProperty
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);

// Teste após implementação do get
console.log(languages[0]);
console.log(languages[3]);