var sumDigits = require('./Calculator/Num_calculator.js')
var sumDigits2 = require('./Calculator/Num_calculator_2.js')
var chisoduongdoi = require('./1)duongdoi.js')
var chisosumenh = require('./2)sumenh.js')

function chisolienket (name, birth){
    var soduongdoi = sumDigits2 (chisoduongdoi(birth));

    var lienket = 0;
    var sosumenh= sumDigits2 (chisosumenh(name));
    console.log(soduongdoi + " vs " + sosumenh)
    if ( soduongdoi > sosumenh){
        lienket = sumDigits (soduongdoi - sosumenh);
    }
    else {
        lienket= sumDigits ( Math.abs(soduongdoi - sosumenh));
    }
    return lienket;

}

module.exports = chisolienket