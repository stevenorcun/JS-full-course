
var fisrtName = 'Steven';
var age = 33;

var drink = age >= 18 ? drink = 'Beer' : drink = 'Orange Juice'

console.log(fisrtName + ' can drink ' + drink)

// Switch Operator

var job = 'Teacher'

switch (job) {
    case 'Teacher':
        console.log("Lot of student"); break;
    case 'Developper':
        console.log("Lot of language"); break;
    case 'NBA player':
        console.log("Lot of money"); break;
    case 'Unemployed':
        console.log("No chance"); break;
    default:
        console.log("Boring")
}

// Another way to use it
switch (true) {
    case age < 13:
        console.log("Boy"); break;
    case age >= 13 && age < 18:
        console.log("Teenager"); break;
    case age >= 18 && age < 30:
        console.log("young Man"); break;
    default:
        console.log("Man")
}