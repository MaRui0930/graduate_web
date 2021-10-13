import {getRequest} from '@/utils/request'

const path = '/formConf'

export function getLiftAddForm() {
    return getRequest(`${path}/getLiftAddForm`, {});
}
