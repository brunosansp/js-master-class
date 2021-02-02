const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /(\w+) (\((.+)\)+)/;
const parsedStatement = statement.match(regExp);
console.log(parsedStatement);

let database = {
    name: "tables"
};
console.log(database)

parsedStatement[1];