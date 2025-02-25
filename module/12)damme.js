var Word_to_num = require('./Calculator/Word_to_num.js')


function chisodamme(name){
    var list = []
    for( var i = 0; i <name.length; i++){
        list.push(Word_to_num(name[i]));
    }
    return calculatePassionIndex(list)

}

function calculatePassionIndex(characters) {
    // Tạo một đối tượng để đếm số lần xuất hiện của mỗi ký tự
    const charCount = {};
    characters.forEach((char) => {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    });
  
    // Tìm số lần xuất hiện nhiều nhất
    let maxCount = 0;
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
      }
    }
  
    // Tạo danh sách các ký tự xuất hiện nhiều nhất
    const mostPassionateChars = [];
    for (const char in charCount) {
      if (charCount[char] === maxCount) {
        mostPassionateChars.push(char);
      }
    }
    if (mostPassionateChars.length == 0) {
      return "...";
  }

    return mostPassionateChars;
  }

module.exports = chisodamme