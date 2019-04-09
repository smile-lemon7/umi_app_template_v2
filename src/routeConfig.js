/**
 * 配置式路由
 */
exports.routes = [
  {
    path: '/tabs',
    component: "../layouts/baseLayout/index",
    routes: [
      {
        path: '/tabs/index',
        component: "./Home/index",
      },{
        path: '/tabs/classes',
        component: "./Classes/index",
      },{
        path: '/tabs/cart',
        component: "./ShopingCart/index",
      },{
        path: '/tabs/mine',
        component:"./Mine/index",
      },
    ]
  }, {
    path: '/',
    component: "./Login/index",
  },
];

