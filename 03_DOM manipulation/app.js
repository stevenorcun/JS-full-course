
// Built an application game
// Concept in this app.js
//          DOM manipulation :
//                      document.querySelector().addEventListener( event, collbackFcuntion )
//                          => the querySelector() select just the first occurence
//                          => the querySelectorAll() select all occurences
//                      document.getElementById().addEventListener( event, collbackFunction )
//                      class and style manipulation : classList.remove .add .toogle, style.display
//                      Concept of not repeat yourself
//                      Array, Anonymous function
//                      Dynamic score update with variables scores[], activePlayer, roundScore
//                      CONCEPT OF STATE VARIABLE

var scores, roundScore, activePlayer, previousDice;
var dice1DOM = document.getElementById('dice-1');
var dice2DOM = document.getElementById('dice-2');

// SATE VARIABLE
var gamePlaying;

initGame();

// init the game
// On the second argument of the addEventListener we just refer to the method without
// parenthses. Because we don't want to call it right now. We want the event call the method
// each time we click on it, the is call back later.
var newGame = document.getElementById('new-game').addEventListener('click', initGame);

function initGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    previousDice = 0;
    displayDices(false);
    gamePlaying = true;

    // The getElementById() is faster than querySelector()
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')
}

// We can also using callback function by using the concept of anonymous function
// It's a function that doesn't have a name so can not be reccaled in the code, only here
document.querySelector(".btn-roll").addEventListener('click', function () {

    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        displayDices(true);
        dice1DOM.src = 'dice-' + dice1 + '.png'
        dice2DOM.src = 'dice-' + dice2 + '.png'

        if (dice1 > 1 && dice2 > 1) {
            roundScore += (dice1 + dice2);
            if (dice1 === 6 && previousDice === 6) {
                scores[activePlayer] = 0;
                document.getElementById("score-" + activePlayer).textContent = '0';
                nextPlayer();
            }
            else {
                previousDice = dice1;
            }
            document.getElementById("current-" + activePlayer).textContent = roundScore
        } else {
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent = scores[activePlayer]
            nextPlayer()

            // document.querySelector(".player-0-panel").classList.remove('active')
            // document.querySelector(".player-1-panel").classList.add('active')
            displayDices(false);
        }
    }
});

document.getElementById('hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        console.log(scores)
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

        var input = document.querySelector('.winning-score').value;

        // Javascript do coertion here. if empty value => falsy
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.getElementById("name-" + activePlayer).textContent = "YOU WIN !!";
            displayDices(false);
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
})

var nextPlayer = function () {
    document.getElementById("current-" + activePlayer).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    previousDice = 0;

    // A better way is to use the method Toogle
    // => if the classe active exist then it remove it and if not exist then add it
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
}

function displayDices(show) {
    if (show) {
        dice1DOM.style.display = 'block';
        dice2DOM.style.display = 'block';
    } else {
        dice1DOM.style.display = 'none';
        dice2DOM.style.display = 'none';
    }

}

// A state variable tell us the condition of a system
// We need it when we want to remember something or the state of something