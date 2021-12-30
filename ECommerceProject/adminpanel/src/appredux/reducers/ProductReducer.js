import * as actionType from '../actions/ActionTypes'

export default function ProductReducer(state=[],action)
{
    switch(action.type){
        case actionType.LOAD_PRODUCTS: return action.payload.products
        case actionType.ADD_PRODUCT : return [
                                       ...state , action.payload.product
                                ]
        case actionType.CHANGE_PRODUCT_STATUS: return state.map(prod=>{
            //console.log(action.payload)
            if(prod._id===action.payload.pid){
                prod.prod_status = action.payload.status
                return prod
            }else
                return prod
        })                                
        default: return state                                
    }
}