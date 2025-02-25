var sum = require('./Calculator/Num_calculator_2.js')

function chisochang(date) {
    var dateParts = date.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);
    var chang1 = sum(sum(day) + sum(month))   //tổng ngày + tháng
    var chang2 = sum(sum(day) + sum(year))   //tổng ngày + năm
    var chang3 = sum(chang1 + chang2 )   //tổng ngày + tháng
    var chang4 = sum(sum(month) + sum(year) ) //Tổng Tháng + Tổng Năm 
    

    return { chang1, chang2, chang3, chang4 };
  }


  module.exports = chisochang