// First class functions 


var years = [1999, 1987, 1989, 2007]

function arrayCalc(yearsArray, fn) {
    var arRes = [];
    for (var i = 0; i < yearsArray.length; i++) {
        arRes.push(fn(yearsArray[i]))
    }
    return arRes;
}

function calculAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function isFullAge(yearOfBirth) {
    return calculAge(yearOfBirth) > 18;
}

function maxHeartrate(el) {
    if (calculAge(el) >= 18 && calculAge(el) <= 81)
        return Math.round(206.0 - (0.67 * el));
}

// Here we don't call the method calculAge() with parentheses, because we don't want to
// call the method now, we want it called later in the body of the function arrayCalc
// Concept callback function !!
console.log(arrayCalc(years, calculAge));
console.log(arrayCalc(years, isFullAge));
