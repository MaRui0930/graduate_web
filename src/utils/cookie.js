import cookie from 'cookie_js'

const token = "token";

export function getToken() {
    return cookie.get(token);
}
export function removeToken() {
    return cookie.remove(token);
}