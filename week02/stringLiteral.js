var DoubleStringCharacters = /([^"\\\u000A\u000D\u2029\u2028]|\u2028|\u2029|(\\|(['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2029\u2028])|(?<![0-9])0|x[0-9a-fA-F]{2}|(u[0-9a-fA-F][4]|u[0-9a-fA-F]{2})) |(\\|(\u000A|\u2029|\u000D\u000A|(?<!\u00A)\u000D)))+/
var SingleEscapeCharacters = /([^'\\\u000A\u000D\u2029\u2028]|\u2028|\u2029|(\\|(['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2029\u2028])|(?<![0-9])0|x[0-9a-fA-F]{2}|(u[0-9a-fA-F][4]|u[0-9a-fA-F]{2})) |(\\|(\u000A|\u2029|\u000D\u000A|(?<!\u00A)\u000D)))+/
var SourceCharacter = '[^"\\\u000A\u000D\u2029\u2028]'
var LS = '\u2028'
var PS = '\u2029'
var third = "\\|"
var LineContinuation = /\\|(\u000A|\u2029|\u000D\u000A|(?<!\u00A)\u000D)/
var LF = '\u000A'
var CR = '\u000D'

var EscapeSequence = /(['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2029\u2028])|(?<![0-9])0|x[0-9a-fA-F]{2}|(u[0-9a-fA-F][4]|u[0-9a-fA-F]{2})/
var CharacterEscapeSequence = ''
var SingleEscapeCharacter = /['"\\bfnrtv]/
var NonEscapeCharacter = /''/
var EscapeCharacter = /['"\\bfnrtv0-9xu]/
var HexEscapeSequence = /x[0-9a-fA-F]{2}/
var UnicodeEscapeSequence = /u[0-9a-fA-F]{4}|u/

var LineTerminator = /[\u000A\u000D\u2029\u2028]/
// codePoint: HexDigits but only if MV(mathematical value) of HexDigits ≤ 0x10FFFF





// 字符串字面量
var StringLiteral = /^"([^"\\\u000A\u000D\u2029\u2028]|\u2028|\u2029|(\\|(['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2029\u2028])|(?<![0-9])0|x[0-9a-fA-F]{2}|(u[0-9a-fA-F][4]|u[0-9a-fA-F]{2})) |(\\|(\u000A|\u2029|\u000D\u000A|(?<!\u00A)\u000D)))+"$|^'([^'\\\u000A\u000D\u2029\u2028]|\u2028|\u2029|(\\|(['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2029\u2028])|(?<![0-9])0|x[0-9a-fA-F]{2}|(u[0-9a-fA-F][4]|u[0-9a-fA-F]{2})) |(\\|(\u000A|\u2029|\u000D\u000A|(?<!\u00A)\u000D)))+'$/;

