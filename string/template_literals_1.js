let host = "localhost";
let port = "3000";
let resource = "users";
// let url = "https://" + host + ":" + port + "/" + resource;
// template literal são envolvidas por `` e podem possuir placeholders que são indicados por ${expression}, ficando `${expression}`
let url = `https://${host}:${port}/${resource}`;