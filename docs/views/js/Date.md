---
title: Date对象及传参
date: 2020-04-08 22:37:00
categories:
 - js
tags:
 - js
---

## Date对象
``` js
    var d = new Date()  // 创建一个Date的实例
    d.getTime()         //返回实例对象距离1970年1月1日00:00:00对应的毫秒数  GMT时间
    d.getDay()          //返回星期，星期日为0，星期一为1
    d.getFullYear()     //返回四位的年份
    d.getMonth()        //返回月份（0表示1月，11表示12月）
    d.getDate()         //返回实例对象对应每个月的几号（从1开始）
    d.getHours()        //返回小时(0~23)
    d.getMinutes()      //返回分钟（0-59）
    d.getSeconds()      //返回秒（0-59）
    d.getMilliseconds() //返回毫秒（0-999）
```

### new Date(milliseconds)
Date对象接受从1970年1月1日00:00:00 UTC开始计算的毫秒数作为参数。

这意味着如果将Unix时间戳作为参数，必须将Unix时间戳乘以1000。
``` js
    new Date(1378218728000); // Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

    // 1970年1月2日的零时
    var Jan02_1970 = new Date(3600*24*1000); // Fri Jan 02 1970 08:00:00 GMT+0800 (CST)
```

### new Date(datestring)

Date对象还接受一个日期字符串作为参数，返回所对应的时间。

所有可以被Date.parse()方法解析的日期字符串，都可以当作Date对象的参数
``` js
    new Date("2020-02-18")
    new Date("2020-FEB-18")
    new Date("FEB, 18, 2020")
    new Date("FEB 18, 2020")
    new Date("Feberuary, 18, 2020")
    new Date("Feberuary 18, 2020")
    new Date("18, Feberuary, 2020")
```

### new Date(year, month, [day, hours, minutes, seconds, ms])
在多个参数的情况下，Date对象将其分别视作对应的年、月、日、小时、分钟、秒和毫秒。

如果采用这种用法，最少需要指定两个参数（年和月），其他参数都是可选的，默认等于0。如果只使用年一个参数，Date对象会将其解释为毫秒数。
``` js
    new Date(2020) // Thu Jan 01 1970 08:00:02 GMT+0800 (CST)
    new Date(2020,0) // Wed Jan 01 2020 00:00:00 GMT+0800 (CST)
    new Date(2020,0,1) // Wed Jan 01 2020 00:00:00 GMT+0800 (CST)
    new Date(2020,0,1,0) // Wed Jan 01 2020 00:00:00 GMT+0800 (CST)
    new Date(2020,0,1,0,0,0,0) // Wed Jan 01 2020 00:00:00 GMT+0800 (CST)
```


### 注意事项
在新建日期对象时，如果不设置时间，则认为创建的是`UTC`的`0`点，也就是北京时间(`CST`)8点

如果设置时间，则是北京时间当前时间。
```js
    new Date('2020-03-08')          // Sun Mar 08 2020 08:00:00 GMT+0800 (CST)
    new Date('2020-03-08 00:00:00') // Sun Mar 08 2020 00:00:00 GMT+0800 (CST)
```