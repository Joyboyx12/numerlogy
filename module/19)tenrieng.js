var sumDigits = require('./Calculator/Num_calculator.js')
var Word_to_num = require('./Calculator/Word_to_num.js')

function calculateDestinyNumber(fullName) {

    var destinyNumber = 0;

    thistext = fullName.split(" ")
    var lastWord = thistext[thistext.length - 1];
    destinyNumber += Word_to_num(lastWord)
   
    return sumDigits(destinyNumber);
}
  
module.exports = calculateDestinyNumber;

