var sum = require('./Calculator/Num_calculator_2.js');
var chisonoithang = require('./17)chisonoithang.js');

function chisonoingay(date) {
  var currentTime = new Date();
  var current_day = currentTime.getDate(); // Ngày hiện tại
  var cur_month = currentTime.getMonth() + 1;   // Tháng hiện tại
  var cur_year = currentTime.getFullYear(); // Năm hiện tại
  var dateParts = date.split("/");
  var day_sinh = parseInt(dateParts[0]); // Ngày sinh: 13
  var month_sinh = parseInt(dateParts[1]); // Tháng sinh: 5

  // Lấy mảng chỉ số nội tháng
  var chisonoithang_array = chisonoithang(date); // [1, 2, 3]
console.log(chisonoithang_array)
  // Tính số ngày trong tháng hiện tại
  var days_in_current_month = new Date(cur_year, cur_month, 0).getDate();

  // Tạo mảng 2 ngày: ngày 13 và ngày 14
  let days = [];
  let day = current_day;
  let month = cur_month;
  let year = cur_year;
  for (let i = 0; i < 3; i++) {
    days.push({ day: day, month: month, year: year });
    day++;
    if (day > days_in_current_month) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
  }

  // Tính chỉ số nội ngày
  let results = [];
  for (let target of days) {
    let chisonoithang_value;
    if (target.month === cur_month && target.year === cur_year) {
      // Trong tháng hiện tại
      if (target.day <= day_sinh) {
        chisonoithang_value = chisonoithang_array[0]; // 1 (cho ngày <= ngày sinh)
      } else {
        chisonoithang_value = chisonoithang_array[1]; // 2 (cho ngày > ngày sinh)
      }
    } else {
      chisonoithang_value = chisonoithang_array[2]; // 3 (cho các tháng sau)
    }
    let index = sum(target.day + chisonoithang_value);
    results.push(index);
  }

  return results;
}

module.exports = chisonoingay