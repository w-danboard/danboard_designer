import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 登录
const Login = () =>
  import('@/views/login/index.vue')

// 主页面
const Main = () =>
import('@/views/main/index.vue')

// 首页
const Admin = () =>
import('@/views/admin/index.vue')

// 编辑页面
const DesigenerPage = () =>
  import('@/views/desigener-page/index.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'app_login',
    component: Login,
    meta: {
      name: '登录'
    }
  },
  {
    path: '/main',
    component: Main,
    meta: {
      name: '主页面'
    },
    children: [
      {
        path: '/admin',
        name: 'app_admin',
        component: Admin,
        meta: {
          name: '首页'
        }
      },
      {
        path: '/desigener-page',
        name: 'app_desigener_page',
        component: DesigenerPage,
        meta: {
          name: '编辑页面'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
