var chisoduongdoi = require('./1)duongdoi.js')
var chisosumenh = require('./2)sumenh.js')
var sumDigits = require('./Calculator/Num_calculator.js')

function truongthanh (name, birth){
    var truongthanh = 0;
   return truongthanh = sumDigits(chisoduongdoi(birth) + chisosumenh(name))

}



module.exports = truongthanh