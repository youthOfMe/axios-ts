import { hyRequest2 } from '..'
import { AxiosHeaders } from "axios";

hyRequest2.request({
    headers: new AxiosHeaders(),
    url: '/entire/list',
    params: {
        offset: 0,
        size: 20
    }
}).then(res => {
    console.log(res.data)
})

interface IHighScoreData {
    list: any[]
    subtitle: string
    title: string
    type: string
    _id: string
}

hyRequest2.request<IHighScoreData>({
    headers: new AxiosHeaders(),
    url: '/home/highscore',
    interceptors: {
        requestSuccessFn: (config) => {
            console.log('/home/highscore请求成功的拦截')
            return config
        },
        responseSuccessFn: (res) => {
            console.log("/home/highscore响应成功的拦截")
            return res
        }
    }
}).then(res => {
    console.log(res.subtitle)
})