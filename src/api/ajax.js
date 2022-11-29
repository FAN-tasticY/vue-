//二次封装axios
import axios from 'axios'
import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'




//这里应该就是将axios所有的属性都给了service了然后再将其暴露出去就完事了
const service = axios.create({
    baseURL:'/api'
})

//请求拦截器
service.interceptors.request.use((config)=>{
    NProgress.start()
    return config
})

//响应拦截器
service.interceptors.response.use(
    response => {
        NProgress.done()
        return response.data
    },
    error => {
        //return error  这么写就错了 因为他的内部是在进行链式调用 然后这样返回一个error默认是成功的 所以还会调用成功的回调函数
        //return Promise(()=>{})    或者这么写 传递一个padding状态的可以中断链式调用
        NProgress.done()
        return Promise.reject(error)
    }
)


export default service



// axios.get('http:www.baidu.com').then(
//     response => {
//         console.log(response);
//         return undefined
//     },
//     error => {
//         console.log('失败了',error);
//         return new Promise(()=>{})
//     }
// ).then(
//     response => {},
//     error => {}
// ).then(
//     response => {},
//     error => {}
// )