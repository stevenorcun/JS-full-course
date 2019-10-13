var now = 2019
var yearJohn = 1986
var fullage = 18

// Concept of precedence operator
// Voir la table de precedene offcicielle de JS
var isFullage = now - yearJohn >= fullage

console.log(`isFullage = ${isFullage}`)

// Grouping
var ageMark = now - yearJohn
var ageJohn = 35
var average = (ageJohn + ageMark) / 2

console.log(average)

// Multiple assignement
// = assignment is right to left => this is why x not undifined
var x, y
x = y = (3 + 5) * 4 - 6
console.log(x, y)

// other operators
x *= 2
x += 2
x -= 2
x++
x--