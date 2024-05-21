import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('@/views/layout'),
  redirect: '/home', // 默认显示首页的二级路由
  children: [
    {
      path: 'home',
      component: () => import('@/views/DataVisual')
    },
    {
      path: '/onemap',
      component: () => import('@/views/OneMap')
    }]
},
{
  path: '/reg',
  component: () => import('@/views/register')
},
{
  path: '/login',
  component: () => import('@/views/login')
}

]

const router = new VueRouter({
  routes
})

export default router
