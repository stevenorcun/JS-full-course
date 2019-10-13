
var markHeiht = 78
var markMetter = 1.78

var johnHeiht = 87
var johnMetter = 1.68

var IBMMark = markHeiht / (markMetter * markMetter)
var IBMJohn = johnHeiht / (johnMetter * johnMetter)

console.log(IBMMark, IBMJohn)

var isMakIBMHigher = IBMMark > IBMJohn

console.log(`Mark IBM is higher than John IBM : ${isMakIBMHigher}`)
