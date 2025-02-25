var sum = require('./Calculator/Num_calculator_2.js')
var Word_to_num = require('./Calculator/Word_to_num.js')
var sumDigits = require('./Calculator/Num_calculator.js')
var tiengviet = require('./Calculator/tiengviet.js')

function chisononghiep(fullName,dateOfBirth) {
    var tongnonghiep = [];
    // Chuyển đổi ngày sinh thành mảng các chữ số
    var dateParts = dateOfBirth.split("/");
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);

    // nợ nghiệp theo ngày
    if(day == 13){
        tongnonghiep.push("13/4")
    }
    else if(day == 14){
        tongnonghiep.push("14/5")
    }
    else if(day == 16){
        tongnonghiep.push("16/7")
    }
    else if(day == 19){
        tongnonghiep.push("19/1")
    }

    // nợ nghiệp theo ngày tháng năm 
    var nonghiep = sum(day) + sum(month) + sum(year);

    if(nonghiep == 13){
        tongnonghiep.push("13/4")
    }
    else if(nonghiep == 14){
        tongnonghiep.push("14/5")
    }
    else if(nonghiep == 16){
        tongnonghiep.push("16/7")
    }
    else if(nonghiep == 19){
        tongnonghiep.push("19/1")
    }
    // nợ nghiệp theo sứ mệnh

    var nonghiepten = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        nonghiepten += Word_to_num(thistext[i])
    }
    if(nonghiepten == 13){
        tongnonghiep.push("13/4")
    }
    else if(nonghiepten == 14){
        tongnonghiep.push("14/5")
    }
    else if(nonghiepten == 16){
        tongnonghiep.push("16/7")
    }
    else if(nonghiepten == 19){
        tongnonghiep.push("19/1")
    }
     // nợ nghiệp theo linhhon
    var nonghieplh = nonghieplinhhon(fullName)
    if(nonghieplh == 13){
        tongnonghiep.push("13/4")
    }
    else if(nonghieplh == 14){
        tongnonghiep.push("14/5")
    }
    else if(nonghieplh == 16){
        tongnonghiep.push("16/7")
    }
    else if(nonghieplh == 19){
        tongnonghiep.push("19/1")
    }

    // no nghiệp nhân cách
    var nonghiepnc = nonghiepnhancach(fullName)
    if(nonghiepnc == 13){
        tongnonghiep.push("13/4")
    }
    else if(nonghiepnc == 14){
        tongnonghiep.push("14/5")
    }
    else if(nonghiepnc == 16){
        tongnonghiep.push("16/7")
    }
    else if(nonghiepnc == 19){
        tongnonghiep.push("19/1")
    }

    if (tongnonghiep.length == 0) {
        return "...";
    }
    return Array.from(new Set(tongnonghiep));
}

//console.log(chisononghiep("6/1/1986","Nguyễn Gia Hoàng"))

module.exports = chisononghiep


 function nonghieplinhhon(fullName) {

    var destinyNumber = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        destinyNumber += singleword_nguyenam(thistext[i])
    }
  
    return destinyNumber;
}

function nonghiepnhancach(fullName){
    var destinyNumber = 0;

    thistext = fullName.split(" ")
    for(var i = 0; i < this.thistext.length; i++){
        destinyNumber += singleword_phuam(thistext[i])
    }
    return destinyNumber;
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


  function singleword_phuam(word){
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
