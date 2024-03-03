import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";


// 针对AxiosRequestConfig配置进行拓展
export interface HYInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig {
    interceptors?: HYInterceptors<T>
}