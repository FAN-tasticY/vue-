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