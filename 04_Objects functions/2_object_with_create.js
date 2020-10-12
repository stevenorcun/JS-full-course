
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculAge = function () {
    console.log(2019 - this.name);
}

var steven = new Person();

// Object.create is another pattern to make inheritence

var personProto = {
    calculAge: function () {
        console.log(2019 - this.yearOfBirth)
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.job = 'Teacher';

var jane = Object.create(
    personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { valeue: 1997 },
        job: { value: 'Dancer' }
    })
console.log(john)
console.log(jane)