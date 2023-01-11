//这里是专门用域封装发送请求函数的地方 
import service from './ajax.js'
import mockService from './mockService.js'



export function getCategoryListFunction(){
    //这里千万不要忘记return这个东西 因为后面需要等待一个promise实例或者链式调用呢 所以不返回能行吗？
    return service.get('/getCategoryListData')
}
export function getBannerListFunction(){
    return service.get('/getBannerListData')
}
//看起来使用了这个axios但是实际上并没有发送ajax请求的
export function getFloorListFunction(){
    return  mockService.get('/floor')
}
export function getTodayRecommendFunction(){
    return mockService.get('/todayRecommend')
}

//params参数是一个对象
export function postSearchListFunction(params){
    return service.post('/postSearchList',params)
}

export function getSearchSelectorListFunction(params){
    return service.post('/getSearchSelectorList',params)
}

export function getDetailInfo(skuId){
    return service({
        //get请求携带参数
        url:`/getDetailInfo/${skuId}`,
        method:'get'
    })
}

export function postAddShopingCart(skuId,skuNum){
    return service({
        url:`/postAddShopingCart/${skuId}/${skuNum}`,
        method:'post'
    })
}

export function getCarList(PageNumber,goodsNum,index){
    return service({
        url:`/getCarList/${PageNumber}/${goodsNum}/${index}`,
        method:'get'
    })
}

export function addUserInfo(userInfo){
    return service({
        //需要注意，前后端传递对象数据得时候，使用的是json格式
        url:`/addUserInfo/${JSON.stringify(userInfo)}`,
        method:'get'
    })
}
export function getUserInfo(userInfo){
    return service({
        url:`/getUserInfo/${JSON.stringify(userInfo)}`,
        method:'get'
    })
}
export function getPersonInfo(){
    return service({
        url:'/getPersonInfo',
        method:'get'
    })
}

export function getShopingCartInfo(){
    return service({
        url:'/getShopingCartInfo',
        method:'get'
    })
}

export function getUserAddress(){
    return service({
        url:'/getUserAddress',
        method:'get'
    })
}

export function getOrder(tradeInfo){
    return service({
        //这得是请求体参数才可以啊 复杂的数据，比如说对象要使用请求体参数带过去啊
        url:'/getOrder/',
        method:'post',
        data:tradeInfo
    })
}

export function circleConsult(){
    return service({
        url:'/circleConsult',
        method:'get'
    })
}

export function getFinal(){
    return service({
        url:'/www.final',
        method:'get'
    })
}