import * as actionType from '../actions/ActionTypes'

export default function ProductReducer(state=[],action)
{
    switch(action.type){
        case actionType.LOAD_PRODUCTS: return action.payload.products
        case actionType.ADD_PRODUCT : return [
                                       ...state , action.payload.product
                                ]
        default: return state                                
    }
}