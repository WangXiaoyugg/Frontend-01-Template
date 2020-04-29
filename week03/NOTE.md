# Javascript 标准中的对象

1. ECMA262 标准可用的内置对象
2. ECMA262 标准不可用的内置对象

## ECMA262 标准可用的内置对象，开发者可以调用

- 全局对象 (DOM 中全局对象是 window)
- Object 对象
- Function 对象
- Array 对象
- String 对象
- 布尔对象
- Number 对象
- Date 对象
- RegExp 对象
- Error 对象
- JSON 对象

## ECMA262 标准不可用的内置对象，开发者无法使用

1. Bound Function Exotic Objects
   1.1 包裹另一函数对象
   1.2 拥有`[[Call]]` 和`[[Construtr]]` 的 内部方法
   1.3 调用绑定函数会调用其包装函数产生结果
   1.4 内部插槽: `[[BoundTargetFunction]], [[BoundThis]], [[BoundArguments]]`
2. Array Exotic Objects
   2.1 对数组索引属性进行特殊处理，属性名为数组索引的也称为元素，每个数组对象又一个不可配置的长度
   2.2 每当创建和更改数组对象的自身属性，将根据需要调整其他属性以保持不变，添加元素和删除元素了，length 属性会自动更新
   2.3 内部方法，`[[DefineOwnProperty]]`

3. String Exotic Objects
   3.1 包含字符串值和暴露字符串值中的各个代码单元元素一致的虚拟整数索引数据属性
   3.2 存在 length 属性，它是字符串值的代码单元元素数量
   3.3 代码单元数据属性和 length 属性都是不可配置和不可写
   3.4 内部插槽和普通对象一致，也存在`[[StringData]]`
   3.5 内部方法，`[[GetOwnProperty]] [[DefineOwnProperty]] [[OwnPropertyKeys]]`,
4. Arguments Exotic Objects
   4.1 他可以是普通对象，也可以一个外来对象
   4.2 它的数组索引映射到其关联的形式参数绑定
   4.3 和普通对象具有相同的内部插槽，也存在`[[ParameterMap]]`
   4.4 普通对象的`[[ParameterMap]]`值永远是 undefined, 被 Object.prototype.toString 使用
   4.5 内部方法`[[GetOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[Delete]]`
5. Integer-Indexed Exotic Objects
   5.1 它对整数索引属性键执行进行了特殊处理
   5.2 和普通对象具有相同的内部插槽，除此之外，还有`[[ViewedArrayBuffer]] [[ArrayLength]] [[ByteOffset]] [[TypedArrayName]]`
   5.3 内部方法，`[[GetOwnProperty]] [[HasProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[OwnPropertyKeys]]`
6. Module Namespace Exotic Objects
   6.1 暴露被导出模块的绑定
   6.2 模块命名空间外来对象的字符串键和被导出模块的绑定名称存在一对一的对应关系
   6.3 使用 export \* export items 间接导出绑定名称的字符串
   6.4 每个字符串属性值是相应的导出绑定名称的字符串值
   6.5 每个都有这些属性：`[[Writable]] [[Enumerable]] [[Configurable]]`
   6.6 模块对象命名空间不可扩展
   6.7 内部插槽, `[[Module]] [[Exports]] [[Prototype]]`
   6.8 内部方法，`[[SetPrototypeOf]] [[IsExtensible]] [[PreventExtensions]] [[GetOwnProperty]] [[DefineOwnProperty [[HasProperty]] [[Get]] [[Set]] [[Delete]] [[OwnPropertyKeys]]`，除了`[[GetPrototypeOf]]`,
7. Immutable Prototype Exotic Objects
   7.1 存在`[[Prototype]]`内部插槽，一旦初始化后不在变化
   7.2 和普通对象拥有一样的内部插槽
   7.3 内部方法,`[[SetPrototypeOf]] [[SetImmutablePrototype]]`
