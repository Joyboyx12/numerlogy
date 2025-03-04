var sum = require('./Calculator/Num_calculator_2.js')

function chisothachthuc(date) {
    var dateParts = date.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);

    var thachthuc1 = sum(Math.abs(sum(day) - sum(month)))   //tổng ngày - tháng
    var thachthuc2 = sum(Math.abs(sum(day) - sum(year)))   //tổng ngày - năm
    var thachthuc3 = sum(Math.abs(thachthuc1 - thachthuc2 ))   //thach thuc1 - thachthuc 2
    var thachthuc4 = sum(Math.abs(sum(month) - sum(year)) ) //Tổng Tháng + Tổng Năm 
    

    return { thachthuc1, thachthuc2, thachthuc3, thachthuc4 };
  }


  module.exports = chisothachthuc