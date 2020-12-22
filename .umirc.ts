import { defineConfig } from 'umi';

export default defineConfig({
  // 设置为none后，node_modules下的文件不走babel编译，减少编译时间
  nodeModulesTransform: {
    type: 'none',
  },
  // 添加路由
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
});
