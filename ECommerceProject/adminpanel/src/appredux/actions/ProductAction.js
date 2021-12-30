import * as actionType from './ActionTypes'

export const ACTION_LOAD_PRODUCTS = {
    type : actionType.LOAD_PRODUCTS,
    payload : {
        products : undefined
    }
}
export const ACTION_ADD_PRODUCT = {
    type : actionType.ADD_PRODUCT,
    payload : {
        product : undefined
    }
}

export const ACTION_CHANGE_PRODUCT_STATUS = {
    type : actionType.CHANGE_PRODUCT_STATUS,
    payload : {
        pid : undefined,
        status : undefined
    }
}