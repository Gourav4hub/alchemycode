import * as actionType from '../actions/ActionTypes'

var cartCount = 0;
export default function CartReducer(state,action)
{
    switch(action.type)
    {
        case actionType.ADD_CART : 
                            var product = {...action.payload.product,qty:1,cartid:++cartCount}
                            return {...state, carts : [
                                    ...state.carts , product
                                ]
                            }
        case actionType.REMOVE_CART : return { ...state, 
                            carts : state.carts.filter(prod=>prod.cartid!=action.payload.cartId)
                        }           
        case actionType.INCREMENT_CART : return {...state,
                            carts : state.carts.map(prod=>prod.cartid==action.payload.cartId?{...prod,qty:prod.qty+1}:prod)
                        }
        case actionType.DECREMENT_CART : return {...state,
                            carts : state.carts.map(prod=>prod.cartid==action.payload.cartId?{...prod,qty:prod.qty-1}:prod)
                        }
        default: return state
    }
}