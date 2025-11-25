//封装分裂数据相关业务代码
import { ref ,onMounted} from "vue"
import { getBannerAPI } from "@/apis/layout"

export function useBanner(){
    //获取banner
    const bannerList = ref([])
    const getBanner = async () =>{
        const res = await getBannerAPI({
        distributionSite:'2'
        })
        bannerList.value = res.result
    }
    onMounted(() =>getBanner())
    return{
        bannerList
    }
}