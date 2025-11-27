//createRouter 创建router实例对象
//createWebHistory 创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
    {
      path:'/',
      component:layout,
      children:[
        {
          path:'',
          component:home
        },
        {
          path:'category/:id',
          component:category
        },
        //商品大分类里的小分类的路由
        {
          path:'category/sub/:id',
          component:subCategory
        }
      ]
    },
    {
      path:'/login',
      component:login
    }
  ],
  //路由行为配置项  切换分类时滚动到页面顶部
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
