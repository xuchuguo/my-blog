---
title: ES5数组拓展
date: 2020-04-08 22:31:00
categories:
 - js
tags:
 - js
---

##  ES5数组拓展

- Array.isArray(obj) : 用来判断一个对象是不是数组
    ``` js
    var a = [];
    var b = new Date();
    console.log(Array.isArray(a)); //true
    console.log(Array.isArray(b)); //false
    ```

- Array.indexOf / .lastIndexof : 该方法用于查找数组内指定元素的位置，查到第一个之后返回其索引，没有找到则返回-1。lastIndexOf反向搜索，查到第一之后，返回其索引，但顺序还是取正序。
    ``` js
    var arr = [2,3,4,"root","evenyao",3,8,7]
    console.log(arr.indexOf(3))   //1
    console.log(arr.indexOf(11))   //-1
    console.log(arr.lastIndexof(3))   //5
    ```

- Array.forEach(element, index, array) : 遍历数组，参数为一个回调函数，回调函数有三个参数
    - 当前元素
    - 当前元素索引值
    - 整个数组
    ``` js
    var arr = [1,2,3,4,5,6]
    arr.forEach(function(element,i,array){
        array[i]= element + 1
    })
    console.log(arr); //[2, 3, 4, 5, 6, 7]
    ```

- Array.every(function(element, index, array)) : 所有函数的每个回调函数都返回true，才返回true，遇到false就终止执行，返回false
    ``` js
    var arr = [1,2,-1,0,5]
    arr.every(function(val){
        return val>0
    })  //false
    var arr1 = [1,2,1,3,5]
    arr1.every(function(val){
        return val>0
    })  //true
    ```
- Array.some(function(element, index, array)) : 存在有一个回调函数返回true就终止执行并返回true，否则返回false
    ``` js
    var arr = [1,2,-1,0,5]
    arr.some(function(val){
        return val>0
    })  //true
    ```
- Array.map(function(element)) : 遍历数组，回调函数。返回值做操作之后组成一个新数组返回，新数组索引结构和原数组一致，原数组不变
    ``` js
    var arr = [1,2,3,4,5,6]
    var arr2 = arr.map(function(val){
        return val * val
    })
    console.log(arr)   //[1, 2, 3, 4, 5, 6]
    console.log(arr2)   //[1, 4, 9, 16, 25, 36]
    ```

- Array.filter(function(element)) : 返回数组的一个子集，回调函数用于逻辑判断是否返回，返回true则把当前元素加入到返回数组中，false则不加。新数组只包含返回true的值，原数组保持不变。
    ``` js
    var arr = [3,5,6,-1,-2,-3]
    var arr2 = arr.filter(function(val){
        return val > 0
    })
    console.log(arr)  //[3, 5, 6, -1, -2, -3]
    console.log(arr2)  //[3, 5, 6]
    ```

- Array.reduce(function(v1, v2), value) / .reduceRight(function(v1, v2), value) : 遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数
    - 回调函数：把两个值合为一个，返回结果
    - value，一个初始值,可选
    ``` js
    var arr = [3,4,5]
    var arr2 = arr.reduce(function(v1,v2){
        return v1 + v2
    })  
    console.log(arr2) //12

    //含value初始值
    var arr3 = arr.reduce(function(v1,v2){
        return v1 + v2
    },10)
    console.log(arr3) //22
    ```



1. filter 和 map 的异同
    - 相同点：filter 和 map 都是对数组的操作，均返回一个新的数组
    - 不同点：filter是满足条件的留下，是对原数组的过滤；map则是对原数组的加工，映射成一一映射的新数组


2. 可以使用array.concat([])和array.slice(0)来实现不包含引用对象的一维数组的深拷贝