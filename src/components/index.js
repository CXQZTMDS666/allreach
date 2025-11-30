//把components中的所有组件进行全局化注册
//通过插件的方式
import imageVIew from './imageview/index.vue'
import sku from './NdtSku/index.vue'

export const componentPlugin = {
  install(app){
    //app.component('组件名字',组件配置对象)
    app.component('imageView',imageVIew)
    app.component('ndtSKu',sku)
  }
}
