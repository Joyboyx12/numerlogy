var sumDigits = require('./Num_calculator.js')
var tiengviet = require('./tiengviet.js')

function singleword(word){
    // Bảng chữ cái và số tương ứng
    word =  tiengviet(word).toUpperCase();
    var letterToNumber = {
            A: 1, J: 1, S: 1,
            B: 2, K: 2, T: 2,
            C: 3, L: 3, U: 3,
            D: 4, M: 4, V: 4,
            E: 5, N: 5, W: 5,
            F: 6, O: 6, X: 6,
            G: 7, P: 7, Y: 7,
            H: 8, Q: 8, Z: 8,
            I: 9, R: 9
          };
    var total = 0 
    for (var i = 0; i < word.length; i++){
        total += letterToNumber[word[i]]
    }
    return sumDigits(total)
  }



  //console.log(singleword("THI"))
  
  module.exports = singleword