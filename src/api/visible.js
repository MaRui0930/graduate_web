import {getRequest} from "@/utils/request";

const path='/visible'

export function getLiftState() {
    return getRequest(`${path}/getLiftState`)
}

export function getLifeDistribute() {
    return  getRequest(`${path}/getLifeDistribute`)
}

export function getAllBrandOptions() {
    return  getRequest(`${path}/getAllBrandOptions`)
}

export function getFaultType() {
    return  getRequest(`${path}/getFaultType`)
}