
var steven = ["Steven", "Orcun", 1986, "Teacher", false]

// add at the end of array
steven.push("Orange")
// add on first postion
steven.unshift("Mr")

console.log(steven)

// delete on the end
steven.pop()
// delete on the top
steven.shift()

console.log(steven)

var isDevelopper = steven.indexOf("Developper") === -1 ? "he is not a developper"
    : "he is a developper"
console.log(isDevelopper)

