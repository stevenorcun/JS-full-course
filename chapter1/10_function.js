
function calculAge(birthYear) {
    return 2019 - birthYear
}

var StevenAge = 1943

function numberOfYearUntilRetirement(year, firstname) {
    var age = calculAge(year);
    var retirement = 68 - age;
    if (retirement > 0)
        console.log(`${firstname} has to wotk ${retirement} years before retirement`)
    else
        console.log(`${firstname} is already retired`)
}

numberOfYearUntilRetirement(StevenAge, "Steven")