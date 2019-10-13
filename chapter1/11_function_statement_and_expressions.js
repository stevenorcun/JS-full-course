
// function whatDoYouDo(job, fistname) { }

// function expressions  assigned to a variable
var whatDoYouDo = function (job, firstname) {
    switch (job) {
        case 'Teacher':
            return `${firstname} is a ${job}`
        case 'Developper':
            return `${firstname} is a ${job}`
        case 'Driver':
            return `${firstname} is a ${job}`
        default:
            return `${firstname} is uemployed`
    }
}

console.log(whatDoYouDo("Developper", "Steven"))
console.log(whatDoYouDo("Reacher", "Jeremy"))
console.log(whatDoYouDo("Driver", "Marcel"))

// Function expression always produce a value.
// Statement returned anything, they perform actions (if, for ...)
