// New system of key - value in ES6 with any kind type f the key :
// En effte elle peut une string, un number, NaN, object...

const question = new Map();
question.set('question', 'What is the name of the president of USA ?');
question.set(1, 'Obama');
question.set(2, 'Trump');
question.set(3, 'Biden');
question.set('Correct', 2);
question.set(true, 'Correct !');
question.set(false, 'Wrong, try again');

// Principales methodes sur les map :
// - delete / clear / has / entries / get / set / values

// Loopable

for(const [key, value] of question) console.log(`key : ${key} => value : ${value}`);

for(const [key, value] of question.entries()) console.log(`key : ${key} => value : ${value}`);

for (const key of question.keys()) {
    console.log(key)
}

for (const value of question.values()) {
    console.log(valeur);
  }

question.forEach( (value, key) => {
    console.log("AAA", key, value);
});