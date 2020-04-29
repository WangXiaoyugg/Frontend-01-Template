const convertNumberToString = (number, x = 10) => {
  if (isNaN(Number(number))) return "NaN"
  if (number === 0) return '0'


  var integer = Math.floor(number);
  var fraction = number - integer; // 小数
  var string = '';
  var fractionString = ''
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }

  if (fraction) {
    fractionString = '.'
    // 小数部分，乘以基数，取整
    while (fraction > 0) {
      fractionString = fractionString + Math.floor(fraction * x)
      fraction -= Math.floor(fraction * x)
    }
  }
  return string + fractionString
}
