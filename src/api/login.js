import {postRequest} from '@/utils/request'

const path = '/user'

export function login(form) {
    return postRequest(`${path}/login`, form)
}