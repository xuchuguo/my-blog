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

### new Date(datestring)

Date对象还接受一个日期字符串作为参数，返回所对应的时间。所有可以被Date.parse()方法解析的日期字符串，都可以当作Date对象的参数
``` js
    new Date("month dd,yyyy hh:mm:ss")
    new Date("month dd,yyyy")
    new Date(yyyy,mth,dd,hh,mm,ss)
    new Date(yyyy,mth,dd);
    new Date(ms); //参数表示的是需要创建的时间和GMT时间1970年1月1日之间相差的毫秒数
```

