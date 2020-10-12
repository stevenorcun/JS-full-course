
// persons exists => Hoisted to undefined
console.log(persons)

var persons = [
    { id: 1, name: "Steven", age: 32 },
    { id: 2, name: "Mark", age: 23 },
    { id: 3, name: "John", age: 40 }
]

// Context and scope chain
var displayPerson = function (people) {
    // The function can access to variables declared in the global scope, his parent
    // even if not initialized, hoisting to undefined
    if (people) {
        people.forEach(p => {
            console.log(`id : ${p.id}, name : ${p.name}, age : ${p.age},`)
        });
    } else {
        console.log(`variable is ${typeof people}`)
    }
}

displayPerson(persons)

// Here persons is no more undefined, initialized
console.log(persons)