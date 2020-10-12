// The concept is to use the principle of borrowing methods
// we have 3 way to do it : call(), apply() and bind();

var john = {
    name: "John",
    age: 26,
    job: "Teacher",
    presentation: function (style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", Ladies and gentlemen, I\'m and " + this.name +
                ' I\'m a' + this.job + ", I\'m " + this.age)
        } else if (style === "friendly") {
            console.log("Hy guys ! good, I\'m " + this.name + ", good " + timeOfDay)
        }
        else {
            console.log("Just hello, don't want to talk")
        }
    }
}

var emily = {
    name: "Emily",
    age: 34,
    job: 'Designer'
}

john.presentation("formal", "afternoon");

// Call method
// Here we will use the concept of method borowing
// the call method allow us to set the this variable to the emily object, in the first agrument
john.presentation.call(emily, "friendly", "morning")

// Apply
// john.presentation.apply(emily, ["friendly", "evening"])

// Bind
// Bind gives a copy of the method, with a preset argument
// Return a function with pre set arguments, we can not passing all arguments if we want
var johnFriendly = john.presentation.bind(john);

johnFriendly("formal", "morning");

// For emily, we just pas in the first agrument, the this on emily
var emilyFormal = john.presentation.bind(emily, "formal")
emilyFormal();
