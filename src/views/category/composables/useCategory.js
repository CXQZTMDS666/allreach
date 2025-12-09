//封装分裂数据相关业务代码
import { ref,onMounted } from "vue"
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { getTopCategoryAPI } from '@/apis/layout';

export function useCategory(){
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    //如果没有传值则使用初始参数
    const getCategory = async (id=route.params.id) => {
    //因为需要传入id值，而id值也存在于路由里，因此直接获取路由参数得到id值
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
    }
    onMounted(() =>getCategory())
    //目标：路由参数变化的时候 可以把分类接口数据重新发送
    onBeforeRouteUpdate((to) =>{
    // console.log(to);
    getCategory(to.params.id)

    })
    return {
        categoryData
    }
}
