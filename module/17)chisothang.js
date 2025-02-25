var sum = require('./Calculator/Num_calculator_2.js')
var chisonam = require('./16)chisonam.js')
function chisothang(date,current_month,current_year) {


    return sum(current_month + chisonam(date,current_year) );
  }


  module.exports = chisothang