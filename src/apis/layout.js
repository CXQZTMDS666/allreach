import httpInstance from "@/utils/http";

//获取商品总分类
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

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}