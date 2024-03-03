import { AxiosHeaders } from "axios";
import { TIME_OUT } from "./config";
import { BASE_URL } from "./config";
import HYRequest from "./request";
import  AxiosRequestHeaders from 'axios'

const hyRequest = new HYRequest({
    headers: new AxiosHeaders(),
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export const hyRequest2 = new HYRequest({
    headers: new AxiosHeaders(),
    baseURL: 'http://codercba.com:1888/airbnb/api',
    timeout: 8000,

    interceptors: {
        requestSuccessFn: (config) => {
            console.log('爱彼迎的请求成功拦截器')
            return config
        },
        requestFailureFn: (err) => {
            console.log("爱彼迎的请求失败拦截器")
            return err
        },
        responseSuccessFn: (config) => {
            console.log("爱彼迎的响应成功拦截器")
            return config
        },
        responseFailureFn: (err) => {
            console.log("爱彼迎的响应失败拦截器")
            return err
        }
    }
})

export default hyRequest