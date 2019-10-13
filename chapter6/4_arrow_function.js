


var years = [1998, 1997, 1986, 1978, 1966];

// ES5
var ages5 = years.map(function (current) {
    return 2019 - current;
})

console.log(ages5);

// ES6
var ages6 = years.map(el => {
    return 2019 - el;
})
console.log(ages6);