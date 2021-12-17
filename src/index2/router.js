import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@index2_pages/index.vue'),
  },
  {
    path: '/desc',
    name: 'desc',
    component: () => import('@index2_pages/desc.vue'),
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
	// base 这里必须要加上 'index2' 这个值，因为在访问 index2 这个项目时，是通过 /index2 这个路径进行访问的，所以如果不加的话，就找不到页面。
	// 当然也可以通过在 routes 里面配置将 /index2 重定向到 / 也可以实现正常访问，但强烈不推荐，因为这样的话，在浏览器地址栏直接访问此项目内的二级页面会有问题，即会跳转到index1的项目里面去了。
  base: process.env.BASE_URL + 'index2',
  routes,
})

export default router
