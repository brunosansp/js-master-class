const statement = "create table book (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
// console.log(parsedStatement);
const tableName = parsedStatement[1];
console.log("Table: ", tableName);
let columns = parsedStatement[2];
columns = columns.split(", ");
console.log(columns);


// obj = {
//     tableName,
//     a: columns[0],
//     b: columns[1],
//     c: columns[2],
//     d: columns[3],
//     e: columns[4],
//     f: columns[5]
// };
// console.log(obj);