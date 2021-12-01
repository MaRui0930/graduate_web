import {postRequest,getRequest} from '@/utils/request'

const path = '/liftManage'

export function addLift(lift) {
    return postRequest(`${path}/add`,lift)
}

export function getLiftInfo(liftId) {
    return getRequest(`${path}/getLiftInfo`,{id:liftId})
}