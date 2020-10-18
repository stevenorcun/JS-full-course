// This is an example of callback
// The callback pattern it's to call a function after an asynchronous operation
// but sometime the code it's un readable because of the nested callbacks functions

// AN EXAMPLE OF CALLBACK HELL

function getCars(){
    const cars = [
        {id:1, label:"BMW", price: 14000 },
        {id:2, label:"Ferrari", price: 25000 },
        {id:3, label:"Renault", price: 2000 },
        {id:4, label:"Toyota", price: 9000 },
    ]

    const countryCars = [
        {id: 1, country: "Germany", cars: ["BMW", "Audi"]},
        {id: 2, country: "France", cars: ["Renault", "Citroene"]},
        {id: 3, country: "Japan", cars: ["Toyota"]},
        {id: 4, country: "Italy", cars: ["Ferrari", "Fiat"]},
        {id: 5, country: "USA", cars: ["Chrysler", "Ford"]},
    ]

    setTimeout( () => {
        const carsID = [1,2,3,4]
        console.log(carsID);

        setTimeout( (id) => {
            const car = cars.find( el => el.id === id);
            console.log(car);

            setTimeout( label => {
                const countryCar = countryCars.find( el => el.cars.find( el => el === label));
                const country = countryCar.country;

                console.log(country);
            },500, car.label);
        }, 500, carsID[2]);
    }, 1000)
}

getCars();

// ============================================================================================================

// Other example with resolve and reject pattern.