
var bills = [124, 48, 268]
var tips = []
var totalBills = []

var tipsCalculator = function (bills) {
    bills.forEach(bill => {
        if (bill < 50) {
            tips.push((bill * 0.2).toFixed(2))
            totalBills.push((bill * 1.20).toFixed(2))
        }
        else if (bill >= 50 && bill < 200) {
            tips.push((bill * 0.15).toFixed(2))
            totalBills.push((bill * 1.15).toFixed(2))
        }
        else {
            tips.push((bill * 0.1).toFixed(2))
            totalBills.push((bill * 1.1).toFixed(2))
        }
    });
}

tipsCalculator(bills)
console.log(tips)
console.log(totalBills)