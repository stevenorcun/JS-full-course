
// ES5
var john = ["John", 34];
var name5 = john[0];
var age5 = john[1];

// ES6

// On destructure la sructure de données, ici un array
// Ici deux variables name6 et age6 sont créees avec les valeur de l'array
const [name6, age6] = ['Steven', 33]

console.log(name6, age6)

var obj = {
    lastname: 'Orcun',
    firstname: 'Steven'
}

const { lastname: nom, firstname: prenom } = obj;
console.log(nom, prenom);
