
// Dans ES6, la gestion des arguments dynamique est devenu plus facile à gérer

function isFullAge6(limit, ...years) {
    // Au lieu de :
    // var arrYear = Array.prototype.call(arguments);
    // then arrYear.forEach...
    years.forEach(el => {
        console.log(el >= limit);
    });
}

isFullAge6(18, 17, 32, 25, 12, 11);
