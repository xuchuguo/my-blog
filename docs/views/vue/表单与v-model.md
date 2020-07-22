---
title: 表单与v-­model
date: 2020-06-08 22:53:00
categories:
 - vue
tags:
 - vue
---


## 单选按钮
1. 单个单选按钮，直接用`v­-bind`绑定一个布尔值，用`v­-model`是不可以的

    ``` html
    <input type="radio" name="" value="" :checked="picked" />
    ```

2. 如果是组合使用，就需要`v-­model`来配合`value`使用，绑定选中的单选框的`value`值，
此处所绑定的初始值可以随意给
    ``` html
        <div id='app'>
            <input type="radio" name="" value="html" v-model="picked" />
            <br/>
            <input type="radio" name="" value="js" v-model="picked" />
            <br/>
            <input type="radio" name="" value="css" v-model="picked" />
            <br/>
            被选中的是{{picked}}
        </div>

        var app = new Vue({
                el:'#app',
                data:{
                    picked:'js'
                }
            });
    ```


## 复选框
1. 单个复选框，直接用定一个布尔值，可以用`v-­model`也可以用`v­-bind`
    ``` html
    <div id='app'>
    <input type="checkbox" name="checked" value="" v-model="checked" />
    <br/>
    <input type="checkbox" name="checked" value="" :checked="checked" />
    ```

2. 多个复选框

    如果是组合使用，就需要`v­-model`来配合`value`使用，`v­-model`绑定一个`数组`---如果绑定的是`字符串`，则会转化为`true`,`false`，与所有绑定的复选框的`checked`属性相对应

    ``` html
    <div id="app">
        <input type="checkbox" name="" value="html" v-model="checked" />   
        <br />
        <input type="checkbox" name="" value="js" v-model="checked" />  
        <br />
        <input type="checkbox" name="" value="css" v-model="checked" />
        <br />
        <p>选择的是：{{checked}}</p>
    </div>

    var app = new Vue({
        el:'#app',
        data:{
            checked:['html','css']
        }
    });
    ```

## 下拉框
1. 单选下拉框

    所绑定的`value`值初始化可以为数组，也可以为字符串，有`value`直接优先匹配一个`value`值，没有`value`就匹配`option`的`text`值

    ``` html
    <div id="app">
        <select v-model="selected">
            <option>html</option>
            <option value='less'>css</option>
            <option>js</option>
        </select>
        <p>选中的是: {{selected}}</p>
    </div>

    var app = new Vue({
        el: '#app',
        data: {
            selected: "css"
        },
    })
    ```

2. 多选下拉框

    ``` html
    <div id="app">
        <select v-model="selected" multiple>
            <option>html</option>
            <option value='less'>css</option>
            <option>js</option>
        </select>
        <p>选中的是: {{selected}}</p>
    </div>

    var app = new Vue({
        el: '#app',
        data: {
            selected:  []
        },
    })
    ```

## 总结
1. 如果是单选，初始化最好给定字符串，因为`v-­model`此时绑定的是静态字符串或者布尔值

2. 如果是多选，初始化最好给定一个数组


## 修饰符

1. `.lazy`: 默认情况下，`v-model`在每次`input`事件出发后将输入框的值与数据进行同步。可以添加`.lazy`修饰符，从而转变为使用`change`事件进行同步。

2. `.number`: 自动将用户的输入值转化为数值类型，如果这个值无法被`parseFloat`解析，则会返回原始的值。

3. `.trim`: 自动过滤用户输入的首尾空白字符。
