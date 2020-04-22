// 10进制
// var DecimalLiteral = '((0|[1-9]([0-9]+)?)\.([0-9]+)?((e|e)(\-|\+)?[0-9]+)?)|(\.[0-9]+(e|e)(\-|\+)?[0-9]+)|(0|[1-9]([0-9]+)?(e|e)(\-|\+)?[0-9]+)'
// var DecimalIntegerLiteral = '0|[1-9]([0-9]+)?'
// var NonZeroDigit = '[1-9]'
// var DecimalDigit = '[0-9]'
// var ExponentIndicator = 'e|E'
// var SignedInteger = '(-|+)[0-9]+'
// var ExponentPart = '(e|e)(\-|\+)[0-9]+'


// 2进制
// var BinaryIntegerLiteral = '(0b|0B)[0-1]+'
// var BinaryDigits = '[0-1]+'
// var BinaryDigit = '[0-1]'

// 8进制
// var OctalIntegerLiteral = '(0o|0O)[0-7]+'
// var OctalDigits = '[0-7]+'
// var OctalDigit = '[0-7]'

// 16进制
// var HexIntegerLiteral = '(0x|0X)[0-9a-fA-F]+'
// var HexIntegerLiteral = '(0x|0X)([0-9a-fA-F]|[0-9a-fA-F]+)'
// var HexDigits = '[0-9a-fA-F]|[0-9a-fA-F]*'
// var HexDigit = '[0-9a-fA-F]'


// 数字字面量，由2进制，8进制，10进制，16进制组合而成
var NumericLiteral = /^(0(x|X)[0-9a-fA-F]+)$|^(0(o|O)[0-7]+)$|^(0(b|B)[0-1]+)$|(^(0|[1-9]([0-9]+)?)\.([0-9]+)?((e|e)(\-|\+)?[0-9]+)?$)|(^\.[0-9]+((e|e)(\-|\+)?[0-9]+)?$)|(^(0|[1-9]([0-9]+)?)((e|e)(\-|\+)?[0-9]+)?$)/;
