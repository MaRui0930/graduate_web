import axios, {AxiosInstance} from 'axios';

export const project_url = '/graduate_server';

/*
axios.interceptors.response.use(response => {
    if (response.status && response.status === 200 && response.data.code === 500) {
        Message.error({message: response.data.message})
        return;
    }
    return response.data;
}, () => {})
*/

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



