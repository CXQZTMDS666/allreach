import httpInstance from "@/utils/http"
//个人中心订单接口
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}
