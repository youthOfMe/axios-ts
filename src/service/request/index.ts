import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestConfig } from './type'

// 拦截器: 可以进行蒙版loading/配置token/修改配置
class HYRequest {
    instance: AxiosInstance
    
    // request实例 => axios实例
    constructor(config: HYRequestConfig) {
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

    // 封装网络请求的方法
    request<T = any>(config: HYRequestConfig<T>) {
        // 单次请求的成功拦截成功处理 定制化处理
        if (config.inteceptors?.requestSuccessFn) {
            config = config.inteceptors.requestSuccessFn(config)
        }

        return new Promise<T>((resolve, reject) => {
            this.instance.request<any, T>(config).then(res => {
                if (config.inteceptors?.responseSuccessFn) {
                    res = config.inteceptors.responseSuccessFn(res)
                }
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'GET' })
    }
    
    post<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'POST' })
    }

    delete<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'DELETE' })
    }

    put<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'PUT' })
    }

    patch<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: "PATCH" })
    }
}

export default HYRequest
