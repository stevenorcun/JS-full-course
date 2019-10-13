
function Person(lastname, firstname, yearOfBirth, nationality) {

    nationality === undefined ? nationality = 'France' : nationality = nationality;

    this.lastname = lastname;
    this.firstname = firstname;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var steven = new Person("Orcun", "Steven", 1986);
console.log(steven);

// ES6
// On assigne une valeur defaut dans la signature de la méthode
function People(lastname, firstname, yearOfBirth, nationality = "France") {
    this.lastname = lastname;
    this.firstname = firstname;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var gabo = new People("Orcun", "Gabo", 2001);
console.log(gabo);