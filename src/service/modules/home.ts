import hyRequest from "..";
import { AxiosHeaders } from "axios";

// 发送网络请求
interface IHomeData {
    data: any
    returnCode: string
    success: boolean
}
hyRequest.get<IHomeData>({
    headers: new AxiosHeaders(),
    url: '/home/multidata'
}).then((res: IHomeData) => {
    console.log(res.data, res.returnCode)
})