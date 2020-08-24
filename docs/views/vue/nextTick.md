---
title: nextTick作用及用法
date: 2020-06-15 16:10:00
categories:
 - vue
tags:
 - vue
---

## nextTick作用及用法

定义：在下次DOM更新循环结束后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。

理解：nextTick()是将回调函数延迟在下一次dom更新数据后调用，即当数据更新了在DOM中渲染后自动执行该函数。

举例: Vue实现响应式并非数据发生变化后DOM立即变化，而是按照一定的策略进行DOM的更新

``` js
<div id="app">
  <button id="firstBtn" @click="testClick()" ref="a">{{testMsg}}</button>
</div>

<script type="text/javascript">
    var app = new Vue({
        el: '#app',
        data: {
            testMsg: "原始值"
        },
        methods: {
          testClick: function() {
            let that = this
            that.testMsg = '修改后的值'
            console.log(that.$refs.a.innerText) // that.$refs.aa获取指定DOM，输出：‘原始值’
          }
        }
    })  
</script>
```

$nextTick是在下次DOM更新循环结束之后延迟回调，在修改数据之后使用$nextTick则可以在回调中获取更新后的DOM。
``` js
<div id="app">
  <button id="firstBtn" @click="testClick()" ref="a">{{testMsg}}</button>
</div>

<script type="text/javascript">
    var app = new Vue({
        el: '#app',
        data: {
            testMsg: "原始值"
        },
        methods: {
          testClick: function() {
            let that = this
            that.testMsg = '修改后的值'
            that.$nextTick(function() {
              console.log(that.$refs.a.innerText) // 输出：‘修改后的值’
            })
          }
        }
    })  
</script>
```

## 使用场景

1. created()钩子函数进行的DOM操作一定要放在Vue.$nextTick()的回调函数中，因为vue生命周期created()钩子函数执行时DOM其实并未进行任何渲染故此时进行DOM操作无异于徒劳。

    与之对应的是mounted钩子函数，该钩子函数执行时所有的DOM挂载已经完成。

    ``` js
    <div id="app">
        <button id="firstBtn" @click="testClick()" ref="a">{{testMsg}}</button>
    </div>

    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                testMsg: "原始值"
            },
            created() {
                let that = this
                that.$nextTick(function() {
                // 不使用this.$nextTick()方法会报错
                that.$refs.a.innerHTML = 'created中更改了按钮内容' // 写入到DOM元素
                }) //输出：‘created中更改了按钮内容’ 但是testMsg并未变化
            },
            methods: {
                testClick: function() {
                let that = this
                that.testMsg = '修改后的值'
                that.$nextTick(function() {
                    console.log(that.$refs.a.innerText) // 输出：‘修改后的值’
                })
                }
            }
        })  
    </script>
    ```

2. 更改数据后当你想立即使用js操作新的视图的时候需要使用它，来实现DOM数据更新后延迟执行后续代码
    
    ``` js
    <div id="app">
        <h3 id="h" @click="changeText">{{testMsg}}</h3>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                testMsg: "原始值"
            },
            methods: {
                changeText: function() {
                let that = this
                that.testMsg = '修改后的文本值' // vue数据改变，改变dom结构
                let domText = document.getElementById('h').innerText // 后续js对dom的操作
                console.log(domText) // 输出“原始值”,可以看到vue数据修改后DOM并没有立即更新，后续dom都不是最新的
                if (domText === '原始值') {
                    console.log('文本data被修改后dom内容没立即更新')
                } else {
                    console.log('文本data被修改后dom内容被立马更新了')
                }
                }
            }
        })   
    </script>
    ```

    ``` js
        <div id="app">
            <h3 id="h" @click="changeText">{{testMsg}}</h3>
         </div>
        <script type="text/javascript">
            var app = new Vue({
                el: '#app',
                data: {
                    testMsg: "原始值"
                },
                methods: {
                    changeText: function() {
                    let that = this
                    that.testMsg = '修改后的文本值' // 改变dom结构
                    
                    // 使用vus.$nextTick方法可以在dom数据更新后延迟
                    that.$nextTick(function() {
                        let domText = document.getElementById('h').innerText // 后续js对dom的操作
                        console.log(domText) // 输出“修改后的文本值”
                        if (domText === '原始值') {
                        console.log('文本data被修改后dom内容没立即更新')
                        } else {
                        console.log('文本data被修改后dom内容被立马更新了')
                        }
                    })
                    }
                }
            })   
        </script>
    ```


3. 在使用某个第三方插件时，希望vue生成的某些DOM动态发生变化时重新应用该插件，也会用到该方法，此时需在`$nextTick`的回调函数中执行重新应用插件的方法。

## 原理

Vue是异步执行DOM更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环`(eventloop)`中观察到的数据变化的`watcher`推送进这个队列。如果这个`watcher`被触发多次，只会被推送到队列一次。这种缓冲行为可以有效去掉重复数据造成不必要的计算和DOM操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。

当你设置`vm.somedata = 'new value'`时，DOM并不会立马更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。若此时你想要根据更新的DOM状态去做某些事情，就会出现问题。为了在数据变化后等待Vue完成更新DOM，可在数据变化后立即使用`Vue.nextTick(callback)`，这样回调函数在DOM更新完成后就会调用。




