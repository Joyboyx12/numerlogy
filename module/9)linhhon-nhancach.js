var sumDigits = require('./Calculator/Num_calculator.js')
var sumDigits2 = require('./Calculator/Num_calculator_2.js')
var chisolinhhon = require('./4)linhhon.js')
var chisonhancach = require('./6)nhancach.js')

function chisolienket (name){
    var solinhhon = sumDigits2(chisolinhhon(name));
    var lienket = 0;
    var sonhancach= sumDigits2(chisonhancach(name));
    if ( solinhhon > sonhancach){
        lienket = sumDigits (solinhhon - sonhancach);
    }
    else {
        lienket= sumDigits ( Math.abs(solinhhon - sonhancach));
    }
    return lienket;

}

module.exports = chisolienket