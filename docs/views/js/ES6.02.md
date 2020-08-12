---
title: 【ES6】字符串，数组，函数拓展
date: 2020-05-06 17:18:00
categories:
 - ES6
tags:
 - ES6
---

## 字符串扩展


1. 多行字符串
    ``` js
        let str = `
        hello,
        world
        `
        console.log(str)
    ```

2. 字符串模板
    ``` js
        let aa = 'hello'
        let bb = 'world'
        let str = `this is ${aa} ${bb}`
        console.log(str)
    ```

    - String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
    - String.fromCodePoint()：返回码点对应字符
    - codePointAt()：返回字符对应码点(`String.fromCodePoint()`的逆操作)
    - normalize()：把字符的不同表示方法统一为同样形式，返回`新字符串`(Unicode正规化)
    - repeat()：把字符串重复`n`次，返回新字符串
    - matchAll()：返回正则表达式在字符串的所有匹配
    - includes()：是否存在指定字符串
    - startsWith()：是否存在字符串头部指定字符串
    - endsWith()：是否存在字符串尾部指定字符串

## 数组拓展

``` js
var a = [1, 2]
console.log(...a)  // 1, 2
var b = [...a, 3]
b // [1, 2, 3]

var c = b.concat([4, 5])
var d = [...b, 4, 5]
console.log(d)  // [1,2,3,4,5]
```

``` js
function sort(...arr){
    console.log(arr.sort())
}
sort(3, 1, 5)  //[1, 3, 5]
```

``` js
function max(arr){
    return Math.max(...arr)
}
max([3, 4, 1])  // 4
```

- 扩展运算符(...)：转换数组为用逗号分隔的参数序列(`[...arr]`，相当于`rest/spread`参数的逆运算)
- Array.from()：转换具有`Iterator`接口的数据结构为真正数组，返回新数组
    - 类数组对象：`包含length的对象`、`Arguments对象`、`NodeList对象`
    - 可遍历对象：`String`、`Set结构`、`Map结构`、`Generator函数`
    - Array.of()：转换一组值为真正数组，返回新数组
    - copyWithin()：把指定位置的成员复制到其他位置，返回原数组
    - find()：返回第一个符合条件的成员
    - findIndex()：返回第一个符合条件的成员索引值
    - fill()：根据指定值填充整个数组，返回原数组
    - keys()：返回以索引值为遍历器的对象
    - values()：返回以属性值为遍历器的对象
    - entries()：返回以索引值和属性值为遍历器的对象
    - 数组空位：ES6明确将数组空位转为`undefined`(空位处理规不一，建议避免出现)

## 函数拓展

1. 默认值
    ``` js 
    function sayHi(name='hello world') {
        console.log(`hi, ${name}`)
    }
    sayHi()  // "hi, hello world"
    sayHi('hi') // "hi, hi"
    ```
2. 下面两种的区别
    ``` js
    //ex1
    function m1({x = 0, y = 0} = {}) {
        return [x, y];
    }

    //ex2 
    function m2({x, y} = { x: 0, y: 0 }) {
        return [x, y];
    }

    ex1：调用函数需要你传递一个对象，如果你没传对象就用默认值对象`{}`，默认值对象里面都是 `undefined`， 所以属性使用初始值

    ex2：参数需要是一个对象，如果没传对象，就用默认值对象`{ x: 0, y: 0 }`如果传了对象，就使用你传递的对象
    ```