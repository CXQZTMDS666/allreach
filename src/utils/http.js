//axios基础的封装
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
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
  //统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
    return Promise.reject(e)
})

export default httpInstance
