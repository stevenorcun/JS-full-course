
calculateAge(1986)

function calculateAge(year) {
    console.log(2019 - year);
}

var retirement = function (year) {
    console.log(65 - (2019 - year))
}

// Here the variable is hoisting and set to undefined
// so when we use the variable before declared
// => it's undefined
// the variable age here is declare in the global context
console.log(age)
var age = 23

// In this function the variable age is declared in foo context
function foo() {
    // Hoisting in foo context, so var exist and set to undefined
    console.log(age)
    var age = 65
    console.log(age)
}
foo()
console.log(age)
