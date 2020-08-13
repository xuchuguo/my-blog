---
title: 组件命名方法与porp使用方法
date: 2020-06-10 22:37:00
categories:
 - vue
tags:
 - vue
---


##  注册组件

1. 全局注册
    ``` js
    Vue.component('global-component',{
            template: '<div>这是全局组件的内容</div>'
        });
    ```

2. 局部注册
    ``` js
    var app = new Vue({
        el:'#app',
        components:{'my-component':{
            template: '<div>我是组件的内容</div>'
            }
        }
    })
    ```

3. `vue`组件的模板在某些情况下会受到`html`标签的限制,比`<table>`中只能有`<tr>`,`<td>`这些元素，所以直接在`<table>`中使用组件是无效的，此时可以使用`is`属性来挂载组件
    ``` js
    <table>
        <tbody is="my-component"></tbody>
    </table>
    ```

## 组件命名方式

1. 使用`kebab-case`
    ``` js
        Vue.component('my-component-name', {/* ... */})
    ```

2. 使用`PascalCase`
    ``` js
        Vue.component('MyComponentName', {/* ... */})
    ```

    当使用`PascalCase`(首字母大写命名)定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说`<my-component-name>`和 `<MyComponentName>`都是可接受的。

    直接在`DOM`(即非字符串的模板(html))中使用时只有`kebab-case`是有效的。



## prop

由于`HTML`中的`attribute`名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。

所以当使用`DOM模板`时，`camelCase`(驼峰命名法)的`props`名称要转为短横分割命名`kebab-case`,例如:
``` js
    <div id="app">
        <my-component warning-text="提示信息"></my-component>
    </div>
    // 如果使用字符串模板，那么这个限制就不存在了。
    <script>
    Vue.Component('my-component',{
        props:['warningText'],
        template:'<div>{{warningText}}</div>'
        });
    var app = new Vue({
        el:'#app'
    })

</script>

```

### 传递静态或动态Prop

1. 静态传递
    ``` js 
        <div id="app">
            <my-component msg="静态传递"></my-component>
        </div>

        <script>
        Vue.Component('my-component',{
            template: '<div>{{msg}}</div>',
            props:['msg']  //props可以是数组或对象
        })

        var app = new Vue({
            el: '#app'
        })
    ```

2. 动态传递
    ``` js
        <div id="app">
            <input type="text" v-model="parentMessage">
            <my-component :msg="parentMessage"></my-component>
        </div>

        <script>
        Vue.Component('my-component',{
            template: '<div>{{msg}}</div>',
            props:['msg']  //props可以是数组或对象
        })

        var app = new Vue({
            el: '#app',
            parentMessage: ''
        })
    ```

3. 父组件传给子组件的值，子组件接收之后，想要改变父组件传过来的值，就可以使用`.sync`修饰符
    ``` js
        <div id="app">
            <my-component :show.sync='ChildValue' style='padding:30px;border:1px,solid,#ddd;margin-bottom: 20px'></my-component>
            <button @click="changeValue">toggle</button>
        </div>

        var app = new Vue({
            el: '#app',
            data: {
                ChildValue: true,
            },
            methods:{
                changeValue(){
                    this.ChildValue = !this.ChildValue
                }
            }
        })

        Vue.component('MyComponent', {
            template: `<div v-if='show'>
                        <p>默认初始值是{{show}}，所以是显示的</p>
                        <button @click.stop="closeDiv">关闭</button>
                        </div>`,
            props:['show'],
            methods: {
                closeDiv() {
                    this.$emit('update:show', false); //触发input事件,并传入新值
                }
            }
        })
    ```



### 数据验证


``` js
    Vue.component('my-component',{
        props: {
            propA : Number,  //必须是数字类型
            propB : [String , Number],  //必须是字符串或数字类型
            propC: {
                type : Boolean ,
                default : true  //布尔值，默认值是 true
            },
            propD: {
                type: Number ,
                required : true // 数字,必传
            },
            propE: {
                type : Object
                default : function () {
                    return {message: 'hello'} ;
                    } // 对象或数组默认值必须从一个工厂函数获取
            },
            propE: {
                type : Array
                default : function () {
                    return [] ;
                    } // 对象或数组默认值必须从一个工厂函数获取
            },
                propF: {
                    validator: function (value) {
                        return ['success', 'warning', 'danger'].indexOf(value) !== -1
                    } // 这个值必须匹配下列字符串中的一个
                }
            }
        }
    })
```

## 总结

1. 在`html`中, `myMessage`和`mymessage`是一致的,,因此在组件中的`html`
中使用必须使用`kebab­case`(短横线)命名方式。在`html`中不允许使用驼峰！

2. 在组件中, 父组件给子组件传递数据必须用`短横线`。在`template`中，必
须使用`驼峰`命名方式，若为`短横线`的命名方式。则会直接保错。

3. 在组件的`data`中,用`this.XXX`引用时,只能是`驼峰`命名方式。若为`短横线`的命名方式，则会报错。









