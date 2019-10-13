
function addFourAge(a, b, c, d) {
    return a + b + c + d;
}

var ages = [20, 20, 20, 21];
// Le premier agrument de la methode applu est le this
var sum = addFourAge.apply(this, ages);
console.log(sum)

// ES6
const sum3 = addFourAge(...ages);
console.log(sum3)

const familyOne = ['John', 'Valey']
const familyTwo = ['Mark', 'Jonas']
const bigFamily = [...familyOne, 'Lily', ...familyTwo];

console.log(bigFamily);