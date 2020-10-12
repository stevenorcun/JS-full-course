

var Game = function (team1, team2, league, date) {
    this.team1 = team1;
    this.team3 = team2;
    this.league = league;
    this.date = date;
    this.X12;
    this.goals;
    this.handicap;
}

Game.prototype.updateX12 = function (obj) {
    this.X12 = obj;
}

Game.prototype.updateGoals = function (obj) {
    this.goals = obj;
}

Game.prototype.updateHandicap = function (obj) {
    this.handicap = this.handicap;
}

var game1 = new Game("Marseille", "Lille", "Ligue 1", new Date().getFullYear());
console.log(game1);
