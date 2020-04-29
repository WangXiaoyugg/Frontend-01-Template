const convertStringToNumber = (string, x = 10) => {
  const chars = string.split('');
  var number = 0;
  var i = 0;
  while (i < chars.length && chars[i] != '.') {
    // 需要特殊处理10进制度以上
    number = number * x; // 0 -> 1* 10
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++
  }
  if (chars[i] === '.') {
    i++
  }
  var frication = 1;
  while (i < chars.length) {
    // 需要特殊处理10进制度以上
    frication = frication / x; // 0.1 0.001, 0.002
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * frication;
    i++
  }
  // 带e的
  return number;
}
console.log("10.0321")