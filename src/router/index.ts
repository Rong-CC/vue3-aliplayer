/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-24 17:52:43
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-28 16:26:48
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:' index',
    redirect :'video'
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/index.vue')
  }
]

console.log(routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//决定路由模式
// const isPro: boolean = process.env.NODE_ENV === 'production'
// const router = createRouter({
//   history: isPro
//     ? createWebHashHistory(process.env.BASE_URL)
//     : createWebHistory(process.env.BASE_URL),
//   routes,
// })
export default router
