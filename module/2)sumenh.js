var sumDigits = require('./Calculator/Num_calculator.js')
var Word_to_num = require('./Calculator/Word_to_num.js')

function calculateDestinyNumber(fullName) {

    var destinyNumber = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        destinyNumber += Word_to_num(thistext[i])
    }
  
    return sumDigits(destinyNumber);
}
  
 module.exports = calculateDestinyNumber;