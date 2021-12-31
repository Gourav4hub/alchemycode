import * as actionType from './ActionTypes'

export const ACTION_USER_LOGIN = {
    type : actionType.USER_LOGIN,
    payload : {       
        token : undefined,
        username : undefined
    }
}
export const ACTION_USER_LOGOUT = {
    type : actionType.USER_LOGOUT
}

export const ACTION_USER_UPDATE_TOKEN = {
    type : actionType.USER_UPDATE_TOKEN,
    payload : {        
        token : undefined
    }
}