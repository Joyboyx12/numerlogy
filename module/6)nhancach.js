var sumDigits = require('./Calculator/Num_calculator.js')
var tiengviet = require('./Calculator/tiengviet.js')

function chisonhancach(fullName) {

    var destinyNumber = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        destinyNumber += singleword_nguyenam(thistext[i])
    }
  
    return sumDigits(destinyNumber);
}

//b, c, d, đ, g, h, k, l, m, n, p, q, r, s, t, v, x

function singleword_nguyenam(word){
    // Bảng chữ cái và số tương ứng
    word =  tiengviet(word).toUpperCase();
    var letterToNumber = {
        A: 0, J: 0, S: 1,
        B: 2, K: 2, T: 2,
        C: 3, L: 3, U: 0,
        D: 4, M: 4, V: 4,
        E: 0, N: 5, W: 0,
        F: 0, O: 0, X: 6,
        G: 7, P: 7, Y: 0,
        H: 8, Q: 8, Z: 0,
        I: 0, R: 9
          };
    var total = 0 
    for (var i = 0; i < word.length; i++){
        var letter = letterToNumber[word[i]]
        if(word[i] == 'Y' && word[i+1] != null){
            var nextletter = word[i+1];
            if (nextletter == "A" || nextletter == "E" || nextletter == "I" || nextletter == "O"|| nextletter == "U"|| nextletter == "Y"){
                letter = 0
            }
        }
        //console.log (word[i] + " Plus + "+letter)
        total += letter
    }
    return sumDigits(total)
  }

  
 module.exports = chisonhancach;