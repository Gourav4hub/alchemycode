import * as actionType from './ActionTypes'

export const ACTION_FILTER_CATEGORY = {
    type : actionType.CHANGE_FILTER_CATEGORY,
    payload : {
        cid : undefined,
        status : undefined
    }
}

export const ACTION_FILTER_BRAND = {
    type : actionType.CHANGE_FILTER_BRAND,
    payload : {
        brandid : undefined,
        status : undefined
    }
}