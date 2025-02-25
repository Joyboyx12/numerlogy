var sumDigits = require('./Calculator/Num_calculator.js')

function chisongaysinh(dateOfBirth) {
    // Chuyển đổi ngày sinh thành mảng các chữ số
    var dateParts = dateOfBirth.split("/");
    var day = parseInt(dateParts[0]);

  
    return sumDigits(day);
  }
  

  module.exports = chisongaysinh