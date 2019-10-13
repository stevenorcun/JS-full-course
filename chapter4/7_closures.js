// Closures summary :
// An inner function has always access to the variables and parameters ot it's outer function
// even after the outer function has returned


// Here the anonymous inner function in can use the two variables "retirementAge" and the "a"
// variable while the method returned the result !! 
function retirement(retirementAge) {
    var a = ' years left until retirement'
    // So at this point the function retur the result, so the function it's gone !
    // but the variables are still there, still used by the inner function
    // this is closures !
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// Don't forget that the scope chain is a pointer to all the variable object
// The secret of closures is that even if a function has returnd and the execution context gone
// in the execution stack => the Variabe Object and the scope chain are still in memory !!

var franceRetirement = retirement(65)(1986);
var usRetirement = retirement(66)(1986);

function first() {
    var test = "Test";
    return function () {
        return test;
    }
}

function interview(job) {
    return function (name) {
        if (job === "teacher") {
            console.log(name + ", what do you teach ?");
        }
        else if (job === "developper") {
            console.log(name + ", which language do you prefer ?");
        }
        else {
            console.log(name + ", what do you do ?");
        }
    }
}

interview('developper')('steven');