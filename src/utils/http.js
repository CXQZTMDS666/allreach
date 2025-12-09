//axios基础的封装
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from 'element-plus';
import router from "@/router";
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:20000
})

//拦截器

//请求拦截
httpInstance.interceptors.request.use(config =>{
  //从pinia获取token数据
    const userStore = useUserStore()
  //按后端要求拼接token数据
    const token = userStore.userInfo.token
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e => Promise.reject(e))

//响应拦截
httpInstance.interceptors.response.use(res => res.data,e => {
  const userStore = useUserStore()
  //统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401token失效处理
  //1.清除本地用户数据
  //2.跳转到登录页
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }
    return Promise.reject(e)
})

export default httpInstance
