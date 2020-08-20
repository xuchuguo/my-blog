---
title: mixin
date: 2020-06-12 12:10:00
categories:
 - vue
tags:
 - vue
---

## mixin 

1. 基本使用
创建`mixin.js`文件
    ```js
    export const HelloMixin = {
        data () {
            return {
                num: 0
            }
        },
        methods: {
            hello () {
                console.log('hello from mixin')
            },
            addNum () {
                this.num++
            }
        }
        }
    ```

2. 引入

    全局引入
    ``` js
        import { HelloMixin } from './mixin'
        Vue.mixin(HelloMixin)
    ```

    局部引入
    ``` js
        import { HelloMixin } from './mixin'
        export default {
            name: 'Mixin',
             mixins: [HelloMixin]
        }
    ```

3. 使用

``` js
<template>
    <div>
        <h3>Temp1</h3>
        mixin中的num: {{ num }}
        <!-- addNum为HelloMixin中的方法 -->
        <button @click="addNum">Add</button>
    </div>
</template>

<script>
import { HelloMixin } from './mixin'
export default {
    name: 'Temp1',
     mixins: [HelloMixin],
    created () {
    // hello为HelloMixin中的方法
    this.hello()	// hello from mixin
  }
}
</script>

```


4. mixin特性

方法和参数在各组件中不共享

选项合并:
> 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

数据合并:
> 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。

``` js
// 在mixin.js定义data
data () {
  return {
    num: 0,
    message: 'message from mixin'
  }
}
```

``` js
// 在Index.vue中定义data
data () {
  return {
    message: 'message from Index.vue ',
    compName: 'Index'
  }
},
```
```
//结果组件中的message覆盖了mixin中的message
// Index.vue
created () {
  console.log(this.$data) 
  // { compName: "Index", message: "message from Index.vue ", num: 0 }
},
```

钩子函数:
> 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用

``` js
// mixin.js
created () {
  console.log('mixin')
}
```

``` js
// Index.vue
created () {
  console.log('Index')
}

结果是先输出Index再输出mixin
```

对象:
> 值为对象的选项，例如`methods`、`components`和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

``` js
// mixin.js
methods: {
    conflicting () {
    console.log('conflicting from mixin')
    }
}
```

``` js
// Index.vue
methods: {
    conflicting () {
        console.log('conflicting from Index')
    }
}
```

``` js
<button @click="conflicting">对象冲突</button>
// 结果控制台只打印了conflicting from Index
```


5. 区别

    mixins 与 vuex

        Vuex: 不同组件操作同一个变量
        mixins: 定义公用的变量,不同组件引入后, 各个变量相互独立

    mixins 与 公共组件

        公共组件: 父组件+子组件
        mixins: 相当于扩展了"父组件"
