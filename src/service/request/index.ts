import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// 拦截器: 可以进行蒙版loading/配置token/修改配置
class HYRequest {
    instance: AxiosInstance
    
    // request实例 => axios实例
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        
        // 每个instance实例都添加拦截器
        this.instance.interceptors.request.use((config) => {
            console.log('全局请求成功的拦截器')
            return config
        }, (err) => {
            console.log('全局请求失败的拦截器')
            return err
        })
        this.instance.interceptors.response.use(res => {
            console.log('全局响应成功的拦截器')
            return res.data
        }, (err) => {
            console.log('全局响应失败的拦截器')
            return err
        })
    }


}
