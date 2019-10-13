
var JohnTeam = [89, 120, 103]
var MarkTeam = [116, 94, 67]
var MaryTeam = [97, 134, 105]

var JohnTeamAvg = scoreAverage(JohnTeam)
var MarkTeamAvg = scoreAverage(MarkTeam)
var MaryTeamAvg = scoreAverage(MaryTeam)

console.log(higherScore(JohnTeamAvg, MarkTeamAvg, MaryTeamAvg))

if (JohnTeamAvg > MarkTeamAvg) {
    console.log(`John team win with ${JohnTeamAvg} score`)
} else {
    console.log(`Mark team win with ${MarkTeamAvg} score`)
}

function scoreAverage(scores) {
    let sumScore = 0
    scores.forEach(s => {
        sumScore += s
    })

    return sumScore / scores.length
}

function higherScore(...scores) {
    let tabScores = [...scores]
    tabScores.sort(function (a, b) {
        return a - b
    })
    return tabScores
}
