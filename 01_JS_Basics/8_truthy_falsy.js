
// falsy : undefined, null, zero, '', NaN
// => converted to False when they are evaluated

// truthy : NOT falsy values

var height;

height = 23
if (height || height === 0)
    console.log('value is Falsy')
else
    console.log('Value is truthy')

// equality operator
if (height == '23') {
    console.log('The == oprator does type coercion !')
}
// what coercion => JS with the operator == transform the string '23' into a number
// and evaluate if it's equal to height. SO HERE it's true
// But with the operator '===' it's false !

var object = {}
var i = 0
var name = ''
var rate = 1 / 0
var test

console.log(object, i, name, rate, test)