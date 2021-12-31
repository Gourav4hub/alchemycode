import * as actionType from '../actions/ActionTypes'

export default function UserReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.USER_LOGIN: return {
                                ...state, loginstatus:true,
                                token : action.payload.token,
                                username : action.payload.username
                                }
        case actionType.USER_LOGOUT: return {
                                ...state, loginstatus:false,
                                token : undefined,
                                username : undefined
                            }
        case actionType.USER_UPDATE_TOKEN: return {
                            ...state,token : action.payload.token
                            }          
        default: return state                                
    }
}