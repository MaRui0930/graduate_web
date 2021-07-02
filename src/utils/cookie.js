import cookie from 'cookie_js'

const username = "username";
// const token = "token";
const portraitUrl = "portraitUrl";

export  function setUsername(value) {
    return cookie.set(username, value,{
        expires: 1
    });
}

export function getUsername() {
    return cookie.get(username);
}

export function removeUsername() {
    return cookie.remove(username);
}

export  function setPortraitUrl(value) {
    return cookie.set(portraitUrl, value);
}

export function getPortraitUrl() {
    return cookie.get(portraitUrl);
}

export function removePortraitUrl() {
    return cookie.remove(portraitUrl);
}