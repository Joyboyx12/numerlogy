var sum = require('./Calculator/Num_calculator_2.js')
var chisothang = require('./17)chisothang.js')
function chisongay(date,current_day, current_month,current_year) {


    return sum(current_day + chisothang(date,current_month,current_year) );
  }


  module.exports = chisongay