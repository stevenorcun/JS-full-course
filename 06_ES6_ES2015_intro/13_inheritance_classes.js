
// INHERITANCE OLD SCHOOL

const Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(`age : ${age}`);
};

const Athlete = function(name, yearOfBirth, job, olympicGames, medals){
    // On bind le this de la fonction Constructor de Person à celle pour mes paramètre de Athlete
    Person.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Pour connecter les deux function constructors
Athlete.prototype = Object.create(Person.prototype);
// On peut ensuite ajouter des méthodes à Athlete
Athlete.prototype.wonMedal = function(){
    this.medals++;
}

let steven = new Athlete('Steven', 1986, 'dev Web', 'swimmer', 4);


// =====> INHERITANCE WITH ES6 : 

class AthleteClass extends Person {
    constructor(name, yearOfBirth, job, olympicGames,medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal = () => {
        this.medals++;
    }
}

const berny = new AthleteClass('Bernard', 1986, 'dev web', 'swimmer', 10);
console.log(berny);
console.log(steven);