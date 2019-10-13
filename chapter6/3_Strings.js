
let fisrtname = "Steven"
let lastName = "Orcun"
const yearOfBirth = 1986;

var calculAge = function (birth) {
    return 2019 - birth;
}
// In ES6 we use template literal to concat string. With curly braces.
console.log(
    `${fisrtname} ${lastName} was born in ${yearOfBirth}
and he is ${calculAge(yearOfBirth)}`
);

// New methods
const name = `${fisrtname} ${lastName}`;
console.log(name.startsWith('S'));
console.log(name.endsWith('S'));
console.log(name.includes(' '));
console.log(fisrtname.repeat(4));