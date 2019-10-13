// - Javascript is a Protoype based language. Wich mean that inheritence use something called
// prototype. So in JS, each object has a property "Prototype" that makes inheritence possible in JS

// - The property of an object is where we put methods and properties that we want other object to
// inherit.

// - The Consrtuctor's prototype property is NOT the prototype of the Constructor itself, it's
// the prototype of ALL instances that are created through it.

// - Protoype chain, find a method in the object, if not => parent => ... => Object => if not null
// null is the only one that has not prototype, so it's the final link of the prtotype chain.

// Creating object with the pattern Function constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2019 - yearOfBirth);
    }
}

var People = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

People.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

var john = new Person("John", 1998, 'Teacher');
var steven = new People("Steven", 1986, 'Developper');
console.log(john)
console.log(steven)

// Behind the scene
// - the new operator first create an empty object : {}

// - Then the function constructor, here Person, is called with the argument passed, so with it's
// execution context that also has the this.

// - The new operator take care of the this, no longer refer to the global object but to the
// context of the function constructor. So point to the empty object that the operator created.

// - We can create a method that all instance will inherit so able to use in the function constructor
// of the.
// But the better way, powerfull is to use the prototype contructor and attached a function to 
// it and instance we inherit it

// everythin is almost an Object
var x = [1, 2, 3];
console.info(x);

// x is an object array prototype => Array protoype has prototype functions that the x variable
// will have. Array has also a lenth prototype property length.
// Array inherit Object Prototype

// Function are also object. Prototype of function
// and function prototype of Object.
