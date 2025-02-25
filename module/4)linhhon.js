var sumDigits = require('./Calculator/Num_calculator.js')
var tiengviet = require('./Calculator/tiengviet.js')

function chisolinhhon(fullName) {

    var destinyNumber = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        destinyNumber += singleword_nguyenam(thistext[i])
    }
  
    return sumDigits(destinyNumber);
}


function singleword_nguyenam(word){
    // Bảng chữ cái và số tương ứng
    word =  tiengviet(word).toUpperCase();
    var letterToNumber = {
            A: 1, J: 0, S: 0,
            B: 0, K: 0, T: 0,
            C: 0, L: 0, U: 3,
            D: 0, M: 0, V: 0,
            E: 5, N: 0, W: 0,
            F: 0, O: 6, X: 0,
            G: 0, P: 0, Y: 7,
            H: 0, Q: 0, Z: 0,
            I: 9, R: 0
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
       // console.log (word[i] + " Plus + "+letter)
        total += letter
    }
    return sumDigits(total)
  }
console.log(chisolinhhon("Bùi Diễm Quỳnh"))
  
 module.exports = chisolinhhon;