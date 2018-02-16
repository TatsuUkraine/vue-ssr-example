import axios from 'axios';
import config from '@/config';
import HttpContract from './contract/Http'

class AxiosHttp implements HttpContract {
    public get(url: string, params?: {[key: string]: string}): Promise<{[key: string]: any}> {
        return axios.get(`${config.API_BASE_URL}${url}`, {
            params: params
        })
    };

    public post(url: string, params?: {[key: string]: string}): Promise<{[key: string]: any}> {
        return axios.post(`${config.API_BASE_URL}${url}`, params)
    };
}

export default AxiosHttp;