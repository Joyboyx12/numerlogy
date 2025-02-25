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
  
  function findMissingNumbers(name) {
    var numbersPresent = [];
    var numbersMissing = [];

    // Chuyển đổi các ký tự có dấu thành không dấu
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    for (var i = 0; i < name.length; i++) {
        var character = name[i].toUpperCase();
        var number = letterToNumber[character];

        if (number !== undefined && !numbersPresent.includes(number)) {
            numbersPresent.push(number);
        }
    }

    for (var j = 1; j <= 9; j++) {
        if (!numbersPresent.includes(j)) {
            numbersMissing.push(j);
        }
    }

    if (numbersMissing.length == 0) {
        return "...";
    }

    return numbersMissing;
}

module.exports = findMissingNumbers