import * as actionType from './ActionTypes'

export var ACTION_FILTER_CHANGE = {
    type : actionType.FILTER_CHANGE,
    payload : {
        filter : {
            category : undefined,
            company : undefined,
            price : undefined
        }
    }
}