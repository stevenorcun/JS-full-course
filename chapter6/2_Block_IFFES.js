
// ES6
{
    let a = 10;
    const b = 11;
    var c = 12
}
// Error block scopped
console.log(a)
// Error block scopped
console.log(b)
// OK function scopped
console.log(c)

    // ES5
    (function () {
        var d = 5;
    })();
console.log(d)