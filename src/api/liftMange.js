import {postRequest} from '@/utils/request'

const path = '/liftManage'

export function addLift(lift) {
    return postRequest(`${path}/add`,lift)
}