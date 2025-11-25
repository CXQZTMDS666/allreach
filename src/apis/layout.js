import httpInstance from "@/utils/http";

//获取分类
export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}

//获取banner
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}