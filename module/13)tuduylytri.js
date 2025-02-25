var sumDigits = require('./Calculator/Num_calculator.js')
var Word_to_num = require('./Calculator/Word_to_num.js')


function tuduylytri(Fullname, date) {
    const getname = Fullname.split(" ");
    var dateParts = date.split("/");
    var day = parseInt(dateParts[0]);
    

    return sumDigits(Word_to_num(getname[getname.length - 1])+sumDigits(day));
  }

module.exports = tuduylytri