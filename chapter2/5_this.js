

calsulateAge(1986)

// the function is attached to the global object window 
// so the this is the window object
function calsulateAge(year) {
    console.log(2019 - year)
    console.log(this)
}

var steven = {
    name: 'Steven',
    yearOfBirth: 1986,
    calculateAge: function () {
        console.log(this)
        console.log(2019 - this.yearOfBirth)

        // here is a regular function so this is attached to the global object
        // not to the object => this refer to the window object
        function innerFcuntion() {
            console.log(this)
        }
        innerFcuntion()
    }
}

steven.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1989
}

// Method borrwing
mike.calculateAge = steven.calculateAge;
mike.calculateAge()

// The this will exist, change when method are called !