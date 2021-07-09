import axios from 'axios';
import {Message} from "element-ui";

export const project_url = '/graduate_server';

axios.interceptors.response.use(response => {
    let data=response.data;
    if (data.status !== 0) {
        Message.error(data.msg);
        return Promise.reject(data)
    }
    return data
}, (error) => {return Promise.reject(error)})

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${project_url}${url}`,
        params: params
    })
}

export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${project_url}${url}`,
        data: params
    })
}



