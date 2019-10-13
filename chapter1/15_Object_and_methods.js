
var steven = {
    firstname: "Steven",
    lastname: "Orcun",
    birthAge: 1986,
    isGold: true,
    family: ['Gabo', 'Michael'],
    calcAge:  function (){
        this.age = 2019 - this.birthAge
    },
    toString: function() {
        return `${this.firstname}\n${this.lastname}\n${this.birthAge}`
    }
}

// steven.calcAge();
console.log(steven.toString());

