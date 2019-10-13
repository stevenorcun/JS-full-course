
// Boxes est un tableau de nodeList
const boxes = document.querySelectorAll('.box');
console.log(boxes);

// ES5 : transform in array
const boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(el => {
    el.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes).forEach(el => {
    el.style.backgroundColor = 'darkblue';
})


// For loop

var Person = function (name, yob) {
    this.name = name;
    this.yob = yob;
    this.age = this.calculAge();
}

Person.prototype.calculAge = function () {
    let now = new Date().getFullYear();
    return now - this.yob;
}

var perons = [
    new Person("Michael", 1989),
    new Person("Steven", 1986),
    new Person("Christelle", 1993),
    new Person("Gabo", 2001),
    new Person("Thérèse", 1999)
]

// ES5
for (let i = 0; i < perons.length; i++) {
    console.log(perons[i].name);
}

// ES6
for (const p of perons) {
    console.log(`${p.name} à ${p.age} ans`);
}

// New method to find information.

// ES5
var ages = [12, 14, 11, 33, 8];

var fullage = ages.map(el => {
    return el > 17;
})
console.log(fullage);

console.log(fullage.indexOf(true));
console.log(ages[fullage.indexOf(true)]);

// ES6

console.log(ages.findIndex(cur => {
    return cur > 17;
}));

console.log(ages.find(cur => {
    return cur > 17;
}))