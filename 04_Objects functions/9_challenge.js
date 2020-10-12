(function () {
    var questions = [];
    // Function Constructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.answersLength = answers.length;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(`${i} - ${this.answers[i]}`);
        }
    }

    Question.prototype.checkQuestion = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer !')
        } else {
            console.log("bad response")
        }
    }

    var question1 = new Question(
        "Who is the actual best NBA player in the world ?",
        [
            "Lebron James",
            "Kevin Durant",
            "Kawhi Leonard"
        ],
        0
    );

    questions.push(question1);

    var question2 = new Question(
        "Who is the best NBA player ever ?",
        [
            "Lebron James",
            "Larry Bird",
            "Michael Jordan",
            "Kobe Bryant"
        ],
        2
    );

    questions.push(question2);

    var question3 = new Question(
        "Who is the best NBA team ever ?",
        [
            "Kobe - Shaq Lakers",
            "Miami Lebron- D. Wade, Bosh",
            "1991 - 1993 and 1996-1998 BULLS",
            "Curry - Durant - Thomson GSW"
        ],
        2
    );

    questions.push(question3);

    function nextQuestion() {

    }

    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = parseInt(prompt('please answer the question : '));
    questions[n].checkQuestion(answer);
})();