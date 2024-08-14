---

---

# 类型转换 {#typeConversion}
JavaScript是弱类型语言，这意味着它不像Java，C++一样的强类型语言有预先确定的类型。JS在运行过程中会自动尝试将不同类型变量转换为同一类型，这种被动的类型转换被称为`隐式类型转换`。并且在JS当中只存在其他类型向`String,Number,Boolean`的转换。

## Number
### `Number()`函数基于如下规则执行转换。
- 数值，直接返回。
- 布尔值，true转换为1，false转换为0。
- null，返回0。
- undefined，返回NaN。
- 字符串，应用以下规则：
  - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。
  - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
  - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。
  - 如果是空字符串（不包含字符），则返回0。
  - 如果字符串包含除上述情况之外的其他字符，则返回NaN。
- 对象，调用`valueOf()`方法，并按照上述规则转换返回的值。如果转换结果是`NaN`，则调用`toString()`方法，再按照转换字符串的规则转换。
> [!NOTE]
> 一元加操作符与`Number()`函数遵循相同的转换规则，可用于快捷转换字符串类型的数字。

## String
### `String()`函数基于如下规则执行转换。
- **字符串**：直接返回原字符串。
- **数值**：直接转换为相应的字符串形式。例如，`123`转换为`"123"`，`0`转换为`"0"`。
- **布尔值**：`true`转换为`"true"`，`false`转换为`"false"`。
- **null**：转换为`"null"`字符串。
- **undefined**：转换为`"undefined"`字符串。
- **Symbol**：直接转换为字符串。例如，`Symbol("description")`转换为`"Symbol(description)"`。
- **对象**：调用`toString()`方法并返回结果。如果`toString()`方法返回对象而非原始类型，再调用`valueOf()`方法，并将其结果转换为字符串。
  - 如果`toString()`方法存在并返回原始类型（通常是字符串），直接使用此结果。
  - 如果`valueOf()`返回原始类型，则使用其字符串形式。
  - 如果两个方法都没有返回原始类型，将抛出`TypeError`错误。

## Boolean
### `Boolean()`函数基于如下规则执行转换。
- **数值**：
  - `0`和`NaN`转换为`false`。
  - 任何非零数值（包括正数和负数）转换为`true`。

- **字符串**：
  - 空字符串 `""` 转换为`false`。
  - 非空字符串（包括包含空格的字符串）转换为`true`。

- **null**：转换为`false`。

- **undefined**：转换为`false`。

- **对象**：
  - 任何对象（包括空对象、数组、函数等）转换为`true`。
  - 即使是空数组 `[]` 或空对象 `{}`，也转换为`true`。

- **Symbol**：任何Symbol值转换为`true`。

> [!NOTE]
> 在条件判断中（如`if`语句中），JavaScript会自动使用`Boolean()`的转换规则，将表达式转换为布尔值以决定代码的执行路径。
> ```js
> if({}){
>   console.log(true)
> }
> // true
> ```

> [!NOTE]
> 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（!!），相当于调用了转型函数`Boolean()`。

## Object
> JavaScript中的对象转换为原始类型主要依赖于[`[Symbol.toPrimitive]`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)、
[`valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
和[`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法。

当JavaScript需要将一个对象转换为原始类型时，它会按照以下步骤进行：

首先检查对象是否有`[Symbol.toPrimitive]`(ES6之后可手动定义)方法：

如果对象定义了这个方法，JavaScript会调用它，传递一个提示参数(hint)来指定期望的转换类型。这种情况下，`[Symbol.toPrimitive]`会返回一个原始值。
```js
let obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return 10;
        }
        if (hint === "string") {
            return "String value";
        }
        return true;
    }
};

console.log(Number(obj)); // 输出: 10
console.log(String(obj)); // 输出: "String value"
console.log(obj + 1); // 输出: "true1" (默认转换为布尔值 true)

```
> [!NOTE]
> hint参数提示了期望的原始类型，它可以是"string"、"number"或"default"

如果没有定义`[Symbol.toPrimitive]`：

对于数字转换（hint为`"number"`或`"default"`）：
JavaScript首先调用`valueOf()`方法。如果`valueOf()`返回原始类型（如数字、字符串、布尔值），则使用该值。如果返回的是对象，JavaScript会继续调用`toString()`方法并使用它的返回值。

对于字符串转换（hint为`"string"`）：
JavaScript首先调用`toString()`方法。如果`toString()`返回原始类型，则使用该值。如果返回的是对象，JavaScript会调用`valueOf()`方法并使用它的返回值。

如果这两个方法都返回对象而不是原始值，那么JavaScript会抛出一个`TypeError`错误，表示无法进行有效的转换。

> [!NOTE]总结
> Boolean：所有对象（包括空对象、数组等）都转换为`true`。\
> Number：优先调用`valueOf()`，然后调用`toString()`，无法转换则返回`NaN`。\
> String：优先调用`toString()`，然后调用`valueOf()`，如果都无法返回原始值，抛出错误。

## 加法操作符 {#plus}


## 关系操作符 {#relational}


## 相等操作符 {#equal}
