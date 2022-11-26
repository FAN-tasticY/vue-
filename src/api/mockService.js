//二次封装axios
import axios from 'axios'

//这里应该就是将axios所有的属性都给了service了然后再将其暴露出去就完事了
const mockService = axios.create({
    baseURL:'/mock'
})

//请求拦截器
mockService.interceptors.request.use((config)=>{
    return config
})

//响应拦截器
mockService.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        //return error  这么写就错了 因为他的内部是在进行链式调用 然后这样返回一个error默认是成功的 所以还会调用成功的回调函数
        //return Promise(()=>{})    或者这么写 传递一个padding状态的可以中断链式调用
        return Promise.reject(error)
    }
)

export default mockService