# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
###### 技术：基于Umi3 + DVA + Ts + Antd-Mobile
- 创建目录： mkdir mall
- 打开目录：cd mall
- 创建项目：yarn create @umijs/umi-app
- 全局安装umi: yarn global add umi
- 安装依赖： yarn
- 安装库： npm install antd-mobile --save
- 启动项目：yarn start
- 建立初步页面：
使用umi创建文件：
例如：创建购物车cart （包含：.tsx, .less）
`umi g page cart/index --typescript --less`
- 添加路由(.umirc.ts)
`routes: [
    { path: '/', component: '@/pages/index' },
    // 购物车
    { path: '/cart', component: '@/pages/cart/index' },
    // 订单列表
    { path: '/olist', component: '@/pages/olist/index' },
    // 用户中心
    { path: '/user', component: '@/pages/user/index' },
    // 登录页
    { path: '/login', component: '@/pages/login/index' },
  ],`
- 创建basiclayout模板公用底部导航栏
  添加layouts文件夹，创建BasicLayout.tsx文件, 再.umirc.ts配置子路由
  `
    routes: [
    { path: '/', 
      component: '@/pages/layouts/BasicLayout', 
      routes: [
        // 配置子路由
        { path: '/', component: '@/pages/index' },
        { path: '/cart', component: '@/pages/cart/index' },
        { path: '/olist', component: '@/pages/olist/index' },
        { path: '/user', component: '@/pages/user/index' },
        { path: '/login', component: '@/pages/login/index' },
      ],
    },
  ],
  `
- 创建底部导航栏BottomNav
- 下载icon(iconfont)选择图标添加购物车 -> 添加代码 -> 放到static文件夹内
  在basicLayout文件夹中引入iconfont.css开始使用