# 第二周

## 第一节课 - 编程语言通识

- 非形式语言， 中文，英文
- 形式语言(乔姆斯基语系)

  - 0 型，无限制文法
  - 1 型，上下文相关文法
  - 2 型，上下文无关语法
  - 3 型，正则文法，限制最多，对词法做正则

- 产生式（BNF）巴斯克诺尔范式
  - 用尖括号括起来的名称表示语法结构
    - 语法结构分为基础机构和复合结构
      - 基础结构称为终结符
      - 符合结构称为非终结符
    - 引号和中间的字符表示终结符
    - 可以有括号
    - \*表示重复多次
    - +表示至少一次

```
一门只支持"a"和"b" 的语言
// 支持 a 或者 b
<Program>:= "a"+ | "b"+
//使用递归支持支持 ab，
<Program>:= <Program>"a" | <Program> "b"

// 定义数字的加法
<Number> := "0" | "1" | "2" | ... | "9"
<DecimalNumber> := "0"| (("1" | "2" | "3"|...|"9")<Number>*)

<Expression> := <DecimalNumber> " +" <DecimalNumber>
// 支持连加, 递归
<Expression> := <Expression> "+" <DecimalNumber>

// 加法支持一个数，两个数两加
<Expression> := <DecimalNumber> | <Expression> "+" <DecimalNumber>

// 四则运算
// 加法表达式
<AdditiveExpression> := <DecimalNumber> | <AdditiveExpression> "+" <DecimalNumber>

// 括号
<PrimaryExpression> = <DecimalNumber> | "(" <LogicalExpression> ")"

// 乘法表达式
<MultiplicativeExpression> := <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber> |
<MultiplicativeExpression> "/" <DecimalNumber>

// 1 + 2 * 3;
<AdditiveExpression> := <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> |
<AdditiveExpression> "-" <MultiplicativeExpression>
// 逻辑或，逻辑与
<LogicalExpression> := <AdditiveExpression> |
  <AdditiveExpression> "||" <LogicalExpression> |
  <AdditiveExpression> "&&" <LogicalExpression>
```

```
// 无限制文法， c 对应 a, b
<a> <b> ::= "c"
// 上下文相关文法, 在 a 和 c 的上下文中 x 被解释为 b
"a" <b> "c" ::= "a" "x" "c"
// 上下文无关文法, 左边只能有一个
<A>::= ?
// 正则文法，只支持左递归
<A>::= <A>?
<A>::= ?<A>x // 不支持回溯右递归

<DecimalNumber> = /0|[1-9][0-9]*/

javascript 的 get 语法, 1型，上下文相关
{
  get a{return 1},
  get: 1
}
```

- 非形式化语言, C++ 中的 \* 可能表示乘号或者指针,
- 1 型, VB 中，< 可能也是小于号，也可能是 XML 开始的直接量
- 非形式化语言,python, 行首 tab 符和空格
- 1 型, JavaScript`/` 可能是除号，也可能是正则表达式开始符号

* 图灵完备性
  1. 命令式 - 图灵机
  - goto
  - if 和 while
  2. 声明式 - lambda
  - 递归

- 动态和静态

  - 动态
    - 在用户设备/在线服务器
    - 产品实际运行时
    - Runtime
  - 静态
    - 在程序员设备时
    - 产品开发时
    - Compiletime

- 类型系统

  1. 动态类型和静态类型
  2. 强类型与弱类型 (有无隐式转换)， TS, C++ 弱类型

- 复合类型

  - 结构体 `{a: T1, b: T2}`
  - 函数签名 `(T1, T2) => T3`

- 子类型

  - 逆变/协变 `Array<Parent> 都可以用Array<Child> 是协变，Function<Child>，都可以用Function<Parent> 是逆变`

- 一般的命令式编程语言组成
  - Atom - identifier, literal
  - Expression - Atom, Operator, Punctuator
  - Statement - Expression, keyword, Punctuator
  - Structure - Function, Class, Process, Namespace, ...
  - Program - Program, Module, Package, Library...

### 第二节课 - 词法

- sourceCharacter:: (原字符)
  any Unicode code point （任意 Unicode 码点）
  ASCII code, 128 个码点
  utf-8 码点
- inputElement 词
  - WhiteSpacen 空白， 支持 unicode 的空白
    - <TAB> u+0009
    - <VT> u+0011 纵向制表符
    - <FF> formfid
    - <SP> space
    - <NBSP> u+00a0 no break space
    - <ZWNBSP> zero with no - - break space
    - <USP> unicode space
  - LineTerminator 换行符
    - <LF> \n LINE FEED
    - <CR> \r CARRIAGE RETURN
    - <LS> 分行符
    - <PS> 分段符
  - Comment 注释
    - MultiLineComment 多行注释
    - SingleLineComment 单行注释
  - Token 标记 (javascript 中有效的)
    - Punctuator 符号 `() > < =...`
    - keywords, `class var...`
    - IdentifierName 标识符 `a`
      - keyword
      - identifier
      - Future reserved Keywords: enum
        - 用做变量名
        - 用作属性名
    - Literal `1, true, null`
      - Types
      - 0.1 + 0.2 !== 0.3
      - Safe Integer, 安全整数
      - Float Compare, 小数比较不准确，转成整数，Number.EPSILON
    - String
      - Charactor
      - code point
      - encoding
        - USC: U+0000 ~ U+FFFF, unicode 的 BMP 范围
        - GB: 国标
        - 存储方式: UTF8/UTF16
          - UTF8 使用 8 位存储
          - UTF16 使用 18 位存储
        - 引号内的特殊字符 \'"bfnrtv
    - Boolean, True, False
    - Null
    - Undefined
    - Symbol
