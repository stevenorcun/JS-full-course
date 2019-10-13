
// Ici en déclarant var => la variable i est function scopped
// Ce qui veut dire que cette variable est accéssible au scope global car for appartient
// au scope Global => cette variable est donc accéssible en dehor ddu for
// La methode setTimeOut éxécutert 10 fois ( i < 10) la callback mais avec la valeur 10 !
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 2000);
}

// Le même code avec déclartion let est différent => i est block scope
// la variable n'est pas visible à l'extérieur du block for, n'existe plus.
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 2000);
}

// les variable const sont également block scopped.
