import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// 拦截器: 可以进行蒙版loading/配置token/修改配置
class HYRequest {
    instance: AxiosInstance
    
    // request实例 => axios实例
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

    }
}
