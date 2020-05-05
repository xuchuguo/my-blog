---
title: min-width和max-width
date: 2020-03-05 12:28:00
categories:
 - css
tags:
 - css
---

### 利用min-width和max-width来实现响应式布局
过去有些设备宽高是600 x 480的，这些小分辨率的我们都归类为小于767的。

为什么是小于767而不是768呢，那是因为在css中@media (min-width: 768px)表示最小是768也就是>=768。

所以我们判断更小的设备用@media (max-width: 767px)这边表示<=767就不会有冲突

使用@media实现网页响应式中的几个关键分辨率

1. 用min-width时，小的放上面，大的在下面
    ``` css
    @media (min-width: 768px){}  // >=768的设备
    @media (min-width: 992px){}  // >=992的设备
    @media (min-width: 1200px){} // >=1200的设备
    ```

2. 用max-width时，大的放上面，小的在下面
    ``` css
    @media (max-width: 1200){}  //<=1200的设备
    @media (max-width: 992px){} //<=992的设备
    @media (max-width: 767px){} //<=768的设备
    ```