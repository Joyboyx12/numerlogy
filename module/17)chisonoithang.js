var sum = require('./Calculator/Num_calculator_2.js')
var chisonoinam = require('./16)chisonoinam.js')

function chisothang(date) {
  var currentTime = new Date();
  var cur_month = currentTime.getMonth() + 1; // Tháng hiện tại (1-12)
  var cur_day = currentTime.getDate(); // Ngày hiện tại
  var cur_year = currentTime.getFullYear(); // Năm hiện tại
  var dateParts = date.split("/");
  var day = parseInt(dateParts[0]); // Ngày sinh
  var month = parseInt(dateParts[1]); // Tháng sinh

  // Tạo danh sách ba tháng cần tính
  let targets = [];
  let target_month = cur_month;
  let target_year = cur_year;
  for (let i = 0; i < 3; i++) {
    targets.push({ month: target_month, year: target_year });
    target_month++;
    if (target_month > 12) {
      target_month = 1;
      target_year++;
    }
  }

  // Tính chỉ số cho từng tháng
  let results = [];
  for (let target of targets) {
    let index = getIndexForMonth(date, target.month, target.year, currentTime);
    results.push(index);
  }

  return results;
}

// Hàm phụ để tính chỉ số cho một tháng cụ thể
function getIndexForMonth(date, target_month, target_year, currentTime) {
  var cur_month = currentTime.getMonth() + 1;
  var cur_day = currentTime.getDate();
  var cur_year = currentTime.getFullYear();
  var dateParts = date.split("/");
  var day = parseInt(dateParts[0]); // Ngày sinh
  var month = parseInt(dateParts[1]); // Tháng sinh

  // Nếu là tháng hiện tại
  if (target_year === cur_year && target_month === cur_month) {
    var noinam = chisonoinam(date, cur_year);
    if (cur_month < month || (cur_month === month && cur_day < day)) {
      return sum(cur_month + noinam[0]); // Trước ngày sinh
    } else {
      return sum(cur_month + noinam[1]); // Sau ngày sinh
    }
  } else {
    // Đối với các tháng khác (tương lai hoặc quá khứ)
    var noinam = chisonoinam(date, target_year);
    if (target_month < month) {
      return sum(target_month + noinam[0]); // Trước tháng sinh
    } else if (target_month > month) {
      return sum(target_month + noinam[1]); // Sau tháng sinh
    } else {
      // target_month === month, tháng tương lai
      return sum(target_month + noinam[1]); // Giả định sau ngày sinh
    }
  }
}



module.exports = chisothang