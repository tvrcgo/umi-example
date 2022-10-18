export default {
  theme: {
    'primary-color': '#00a870',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/about',
          component: './about',
        },
        {
          path: '/state',
          component: './state',
          layout: 'page',
        },
        {
          path: '/',
          component: './index',
        },
        {
          component: './404',
          layout: 'page',
        },
      ],
    },
  ],
  title: 'umi-example',
  antd: {}
}
