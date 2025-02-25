var sum = require('./Calculator/Num_calculator_2.js')

function chisonam(date,current_year) {
    var dateParts = date.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);



    return sum(sum(day) + sum(month)+sum(current_year) );
  }


  module.exports = chisonam