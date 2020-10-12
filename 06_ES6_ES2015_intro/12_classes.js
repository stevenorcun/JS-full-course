// Class are just sugar syntaxe to use Prototype and function constuctors to be more clear for everyone who
// is new in JS or even for those who prefer a better and beautiful syntaxe

// ==========> Function Consructors and Protoype OLD SCHOOL : 

var PersonOldSchool = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

PersonOldSchool.prototype.calculateAge = function(){
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log("WITH OLD SCHOOL age = ", age);
};

const steven5 = new PersonOldSchool('Steven', 1986, 'Dev web');
steven5.calculateAge();

// ==========> EQUIVALENT EN SYNTAXE ES6 AVEC LES CLASSES : 

class PersonClass {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log("WITH CLASS age = ", age);
    }

    static greeting(){
        console.log("Hey there i'm static");
    }

    // On peut créer des methode static qui seront uniquement attaché à la classe
    // Peu utilisé et uitile mais le concept existe
    // Et appeler uniquement comme cece:
    // - PersonClasse.greeting()
}

const steven6 = new PersonClass('Steven', 1986, 'Dev web');
steven6.calculateAge();
PersonClass.greeting();
