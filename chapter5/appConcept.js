// The module Pattern respect the concept of separation of concern
// All IFFE here are stand alone : that mean they don't know each other.

var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return a + x;
    }

    // This object returned is assigned to the variable budgetController
    // And again thanks to the power of closures, we can access to the variable even if the function
    // already returned
    return {
        publicTest: function (b) {
            return add(b)
        }

    }
})();

var UIController = (function () {


})();


// Here we connect functions together.
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    }
})(budgetController, UIController);