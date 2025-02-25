var sumDigits = require('./Calculator/Num_calculator.js')

function calculateLifePathNumber(dateOfBirth) {
    // Chuyển đổi ngày sinh thành mảng các chữ số
    var dateParts = dateOfBirth.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);
  
    // Tính tổng các chữ số của ngày, tháng và năm
    var sum = sumDigits(day) + sumDigits(month) + sumDigits(year);
  
    return sumDigits(sum);
  }
  

  module.exports = calculateLifePathNumber