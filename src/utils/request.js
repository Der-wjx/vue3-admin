import axios from "axios";
import errorCode from "@/utils/errorCode";
import {ElMessage, ElNotification} from "element-plus";

axios.defaults.headers["Content-Type"] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_BASEURL,
    // 超时
    timeout: 10000
})
// request拦截
service.interceptors.request.use(config => {
    // 是否需要设置 token
    // const isToken = (config.headers || {}).isToken === false
    // if (getToken() && !isToken) {
    //     config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
        // MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        //         confirmButtonText: '重新登录',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }
        // ).then(() => {
        //     store.dispatch('LogOut').then(() => {
        //         location.href = '/index';
        //     })
        // })
    } else if (code === 500) {
        ElMessage({
            message: msg,
            type: 'error'
        })
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        ElNotification({
            title: msg,
            type: 'error',
        })
        return Promise.reject('error')
    } else {
        return res.data
    }
})

export default service
