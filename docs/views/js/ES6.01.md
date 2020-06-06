---
title: 【ES6入门第一章】
date: 2020-04-05 12:28:00
categories:
 - ES6
tags:
 - ES6
---


## let和const

`let`: 声明变量

`const`: 声明常量

- 作用范围
    - `var` 在全局代码中执行
    - `const` 和`let` 只能在代码块中执行

- 赋值使用
    - `const` 声明常量后必须立马赋值
        ``` js
            const a  //报错
        ```
    - `let` 声明变量后可立马赋值或使用时赋值
        ``` js
            let a
            let b = 4 //不报错
        ```

- 重点
    - `const`和`let`不允许在相同作用域内，重复声明同一个变量
        ``` js
            let a = 3
            let a = 4  //报错
            var a = 5  //报错
        ```
    - 未定义就使用会报错：`const`和`let`不存在变量提升
        ``` js
            a = 3 
            let a //报错
        ```
    - 暂时性死区：在代码块内使用`const`和`let`声明变量之前，该变量都不可用
        ``` js
            let b = 1
            function test4() {
                console.log(b);  //1
                let a = 2;
            }
            test4()
        ```
        ``` js
        let b = 1
        function test4() {
            console.log(b);  //not defined
            let b = 2
        }
        test4()
        ```


##  解构赋值

- 数组解构
    ``` js
        let [a,b,c] = [1,2,3]
        console.log(a, b, c)  // 1,2,3

        let [a] = 1 //报错
    ```

- 默认值
    ``` js
        let [a, b = 2] = [3]
        a // 3
        b // 2

        let [a, b = 2] = [3, 4]
        a //3
        b //4 

        数组如果没有对应值就是用默认值(数组对没有指undefined),有就使用默认值
        let [a=2, b=3] = [undefined, null]
        a //2
        b //null

        let [a=1, b=a] = [2]
        a //2
        b //2
    ```
- 重点
    - 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
    - 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
    - 解构默认值生效条件：属性值严格等于`undefined`
    - 解构遵循匹配模式
    - 解构不成功时变量的值等于`undefined`
    - `undefined`和`null`无法转为对象，因此无法进行解构


    

