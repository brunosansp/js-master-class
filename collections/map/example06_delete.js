/**
 * O delete remove uma propriedade dada uma chave
 */
const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits.size);
timeUnits.delete("hour");
console.log(timeUnits.delete("minute")); // exibe true
console.log(timeUnits.delete("day")); // exibe false
console.log(timeUnits.size);

console.log(timeUnits.get("second"));
console.log(timeUnits.get("minute"));
console.log(timeUnits.get("hour"));
console.log(timeUnits.get("day"));