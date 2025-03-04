var sum = require('./Calculator/Num_calculator_2.js')

function chisonoinam(date,current_year) {
    var noinam=[];
    var dateParts = date.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);

    var noinam1 = noinam.push(sum(sum(day) + sum(month)+sum(current_year) -1))
    var noinam2 = noinam.push(sum(sum(day) + sum(month)+sum(current_year)))
    console.log(noinam)
    return noinam;
  }


module.exports = chisonoinam

 