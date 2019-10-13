// The pattern IIFE
// IIFE create a new scope for the function. The function will be called once
// all variables created in this function will be scope in the function scope
// and not in the global scope, not visible int the en of the function

(function () {
    console.log(score);
    var score = Math.random() * 10;
    console.log(score >= 5);
})()



    (function (addPoint) {
        console.log(score);
        var score = Math.random() * 10;
        console.log(score >= 5);
    })(2)