function sumDigits(number) {
    if (number == 11 || number == 22 || number == 33)
    {
        return number;
    }
    var sum = 0;
    
    var digits = number.toString().split("");
  
    for (var i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }

    if (sum > 9){
      sum = sumDigits(sum)
    }
  
    return sum;
  }

  module.exports = sumDigits