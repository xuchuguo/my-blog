---
title: 对象
date: 2020-04-06 17:37:00
categories:
 - js
tags:
 - js
---

- Array.push() : 向数组的末尾添加一个或多个元素，并返回新的长度
- Array.pop() : 删除并返回数组的最后一个元素
- Array.unshift() : 向数组的开头添加一个或更多元素，并返回新的长度
- Array.shift() : 删除并返回数组的第一个元素
- Array.splice(index,howmany,item1,.....,itemX) : 从数组中添加/删除项目，然后返回被删除的项目(如果有的话)
    - index : 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
    - howmany : 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
    - item1, ..., itemX : 可选。向数组添加的新项目。

- Array.slice(start,end) : 从已有的数组中返回选定的元素。(不会改变原数组)
    - start : 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
    - end : 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

- Array.join(separator) : 用于把数组中的所有元素放入一个字符串。
    - separator : 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

- Array.concat(arrayX,arrayX,......,arrayX) : concat() 方法用于连接两个或多个数组。//该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。a.concat(b)返回一个a和b共同组成的新数组
    - arrayX : 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

- Array.reverse() : 该方法会改变原来的数组，而不会创建新的数组。

- Array.sort(sortby) : sort() 方法用于对数组的元素进行排序。
    - sortby : 可选。规定排序顺序。必须是函数。

-  访问index不存在的元素的时候返回undefined
    ``` js
    var a = new Array(1,2,3)
    a[100] = 100
    console.log(a.length)  // 101
    console.log(a)  // [1,2,3,undefined x 97,100]
    ```
- 设置数组的length可以改变数组
    ``` js
    a = [1,2,3,4]
    a.length = 2
    console.log(a) // [1, 2]
    ```
- 向数组内添加元素方法,直接使用索引就可以
    ``` js
    var a=[1,2,3];
    a[3]=4;
    console.log(a);//[1, 2, 3, 4]
    ```
- 数组也是对象，索引只是特殊的属性，所以我们可以使用删除对象属性的方法,使用delete 删除数组元素
    ``` js
    delete a[2];
    console.log(a[2]); //undefined
    ```
    这样和直接把a[2]赋值为undefined类似，不会改变数组长度，也不会改变其他数据的index和value对应关系