import originAxios from 'axios';
import { message } from 'antd';

const axios = originAxios.create({
    timeout: 20000
});

axios.interceptors.response.use(
    function (response) {
        if (response.data && response.data.flag === 1) {
            /**
             * successful response
             * {"flag": 0, "data": ""}
             * 
             * unsuccessful response
             * {"flag": 1, "msg": "server error"}
             */
            let errMsg = response.data.msg;
            message.error(errMsg);
            return Promise.reject(errMsg)
        }
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
)

export function get(url: string, data: any) {
    return axios(url, {
        params: data,
    });
};

export function post(url: string, data: any) {
    return axios({
        method: 'post',
        url,
        data,
    })
}

export default axios;