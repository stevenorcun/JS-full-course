
// Arrow function don't own their own this keyword

// ES5
var box5 = {
    color: "green",
    position: 1,
    // La function clickMe est attaché à l'objet => this à accès au variables
    // Le this de la callback fait référence à l'objet global (window) et non à l'objet
    // En effet nous somme dans le contexte d'une regular function.
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            var str = `this is box number ${this.position} and the color is ${this.color}`;
            alert(str);
        })
    }
}

box5.clickMe();

// ------------------- Une Solution -------------------

var box5Red = {
    color: "blue",
    position: 2,
    clickMe: function () {
        var self = this;
        document.querySelector('.blue').addEventListener('click', function () {
            var str = `this is box number ${self.position} and the color is ${self.color}`;
            alert(str);
        })
    }
}

box5Red.clickMe();

// ES6
const box6 = {
    color: "orange",
    position: 3,
    // Les arrow function n'ont pas leur propre this. Elles partagent le this en fonction
    // du contexte dans lequel elles sont appelées.
    // Ici la callback est une arrow function => elle partage le this du contexte, ici l'objet
    clickMe: function () {
        document.querySelector('.orange').addEventListener('click', () => {
            console.log(this)
            var str = `this is box number ${this.position} and the color is ${this.color}`;
            alert(str);
        })
    }
}

box6.clickMe();

// ----------------------- Another example -----------------------

function Person(name) {
    this.name = name;
}

// Avec une arrow function, le this fait fait référence à l'objet
// n'atant pas son propre this, la arrow partage le this du contexte 
Person.prototype.myFriends = function (friendsArray) {

    var friends = friendsArray.map((el) => {
        return `${this.name} is friends with el`;
    });

    console.log(friends);
}

var friends = ['Jejor', 'Berny', 'Isé'];
new Person('Steven').myFriends(friends);