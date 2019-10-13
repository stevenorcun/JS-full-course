
function calculAge(persons, fn) {
    var majeur = [];
    persons.forEach(el => {
        if (fn(el.age))
            majeur.push(el)
    });
    return majeur;
}

function isMajeur(age) {
    return age >= 18;
}

var persons = [
    { id: 1, name: "Steven", age: 32 },
    { id: 2, name: "Gabo", age: 17 },
    { id: 3, name: "Michael", age: 29 },
    { id: 4, name: "Serena", age: 10 }
]
// Second agrument is a function. Callback, we be called later
var result = calculAge(persons, isMajeur)
console.log(result);