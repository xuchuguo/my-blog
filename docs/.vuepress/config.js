module.exports = {
  "title": "许楚国的博客",
  "description": "勤能补拙",
  // "dest": "public", // build后的输出文件夹,默认  .vuepress/dist
  "base": '/my-blog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "我的github",
        "icon": "reco-github",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xuchuguo",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "分类" // 默认 “分类
      },
      "tag": {
        "location": 3, // 在导航栏菜单中所占的位置，默认3
        "text": "标签" // 默认 “标签”
      }
    },
    "logo": "/logo.png",
    "search": true,   // 搜索设置
    "searchMaxSuggestions": 10,
    "sidebar": "auto",   // 自动形成侧边导航
    "lastUpdated": "最后更新时间", // 最后更新时间
    "author": "许楚国",  // 作者名字
    "authorAvatar": "/avatar.png",  // 作者头像
    "startYear": "2019",   // 项目开始时间
    "mode": 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": false // 默认 true，false 不显示模式调节按钮，true 则显示
  },
  "markdown": {
    "lineNumbers": true
  },
  "deploy": "bash deploy.sh"
}