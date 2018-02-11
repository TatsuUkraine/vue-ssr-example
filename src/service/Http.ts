import axios from 'axios';
import config from '../config';

export default class {
    public static get = (url: string, params?: {[key: string]: string}) => {
        return axios.get(`${config.API_BASE_URL}${url}`, {
            params: params
        })
    };

    public static post = (url: string, params?: {[key: string]: string}) => {
        return axios.post(`${config.API_BASE_URL}${url}`, params)
    };
}