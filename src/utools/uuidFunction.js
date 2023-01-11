import { v4 as uuidv4 } from 'uuid';

// uuidv4(); 

function uuidFunction(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }
    return userTempId
}

function setToken(token){
    localStorage.setItem('TOKEN_KEY',token)
}

function getToken(){
    return localStorage.getItem('TOKEN_KEY')
}

function removeToken(){
    localStorage.removeItem('TOKEN_KEY')
}

export {
    uuidFunction,
    setToken,
    getToken,
    removeToken
}