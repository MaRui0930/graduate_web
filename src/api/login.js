// import {project_url} from '@/utils/request'
// import {getRequest} from "@/utils/request";

export function login(reqData) {
    const {userName,password}=reqData
    return new Promise((resolve, reject) => {
        if (userName === "admin" && password === "123") {
            resolve(true)
        }else{
            reject(false)
        }
    })
}