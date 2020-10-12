// Primitive
var a = 2;
var b = a;
a = 22;

console.log(a);
console.log(b);


// Object
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 33;

console.log(obj1)
console.log(obj2)

// function
var age = 27;
var obj = {
    name: 'Steven',
    city: "Paris"
}

function change(a, b) {
    a = 40;
    b.city = "London";
}

console.log("before call change method");
console.log(a);
console.log(obj.city);

change(age, obj);
console.log("after calling change method");
console.log(a);
console.log(obj.city);

// In function primitive are just copy, so outside the method the value doesn't change
// Obje are reference (in memory) => so the value change in the function