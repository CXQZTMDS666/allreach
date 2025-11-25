import { useIntersectionObserver } from '@vueuse/core'

//定义懒加载插件
export const lazyPlugin = {
    install (app) {
        //懒加载指令逻辑
        //定义全局指令
        app.directive('img-lazy',{
            mounted(el,binding){
                //el:指令绑定的那个元素 img
                //binding：binding.value  指令等于号后面绑定的表达式的值 图片url
                console.log(el,binding.value);
                //判断是否进入视口区域  但会存在反复监听
                const {stop} = useIntersectionObserver(
                    el,
                    ([entry]) => {
                        console.log(entry.isIntersecting);
                        if(entry.isIntersecting){
                            //进入视口区域
                            el.src = binding.value
                            //在第一次监听加载后就停止监听
                            stop()
                        }
                    },
                )
            }
        })
    }
}