import * as actionType from './ActionTypes'

export var ACTION_ADD_CART = {
    type : actionType.ADD_CART,
    payload : {
        product : undefined
    }
}

export var ACTION_REMOVE_CART = {
    type : actionType.REMOVE_CART,
    payload : {
        cartId : undefined
    }
}

export var ACTION_INCREMENT_CART = {
    type : actionType.INCREMENT_CART,
    payload : {
        cartId : undefined
    }
}

export var ACTION_DECREMENT_CART = {
    type : actionType.DECREMENT_CART,
    payload : {
        cartId : undefined
    }
}