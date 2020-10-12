
var mark = {
    name: "Mark",
    mass: 85,
    height: 1.77,
    calcIBM: function () {
        this.IBM = this.mass / (this.height * this.height)
    }
}

var john = {
    name: "John",
    mass: 98,
    height: 1.85,
    calcIBM: function () {
        this.IBM = this.mass / (this.height * this.height)
    }
}

mark.calcIBM()
john.calcIBM()

if (mark.IBM > john.IBM)
    console.log(`${mark.name} IBM is higher than ${john.name} IBM`)
else if (mark.IBM < john.IBM)
    console.log(`${john.name} IBM is higher than ${mark.name} IBM`)
else
    console.log(`Equals`)
