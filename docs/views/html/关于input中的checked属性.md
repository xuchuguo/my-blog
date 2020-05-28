---
title: 关于input中的checked属性
date: 2020-03-07 11:14:00
categories:
 - html
tags:
 - html
---


## 关于input中的checked属性

复选框标签具有checked属性，通过此属性可以设置复选框的选中状态。

``` html
<input type="checkbox" checked>
<input type="checkbox" checked=true>
<input type="checkbox" checked=fasle>
<input type="checkbox" checked="checked">
```

发现input全部都被选中了

得出结论：在HTML中，只要设置`checked`属性，无论是否赋值，或者赋何种值，复选框都是选中状态。

在js中可通过设置`checked`属性值可为`true`或者`false`可以复选框设置为选中和非选中状态，经过测试，设置为`"checked"`也可以设置为选中状态，设置为`undefined`也可以取消选中

