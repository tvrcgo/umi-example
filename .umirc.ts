import { IConfig } from 'umi-types'

const config: IConfig = {
  treeShaking: true,
  theme: {
    'primary-color': '#00a870'
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
          path: '/',
          component: './index',
        },
      ],
    },
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'umi-example',
        dll: true,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
}

export default config
