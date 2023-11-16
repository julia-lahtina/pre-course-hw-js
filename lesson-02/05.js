let passwort = {
    name: "Petr",
    surname: "Petrov",
};

let passwort1 = {};
Object.assign(passwort1, [passwort]);
passwort1.name = "Ivan";

console.log(passwort.name);
console.log(passwort1.name);