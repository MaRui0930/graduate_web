import {getRequest} from '@/utils/request'

const path = '/workOrder'

export function changeState(id,liftId,workOrderState) {
    return getRequest(`${path}/change`, {id, liftId, workOrderState});
}
