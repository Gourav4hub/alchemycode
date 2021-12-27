import Store from '../Store';
import * as action from '../actions/CartAction'
function CartOption(props)
{   
    var removeCart = ()=>{
        Store.dispatch({...action.ACTION_REMOVE_CART,payload:
            {
                cartId : props.cartid
            }})
    }

    var decrementCart = ()=>
    {
        if(props.qty==1)
            removeCart()
        else    
            Store.dispatch({...action.ACTION_DECREMENT_CART,payload:
                {
                    cartId : props.cartid
                }})
    }

    var incrementCart = ()=>{
        Store.dispatch({...action.ACTION_INCREMENT_CART,payload:
            {
                cartId : props.cartid
            }})
    }

    return <div>
            <button onClick={removeCart} className='btn btn-danger'>Delete</button>
            <br/><br/>
            <button onClick={decrementCart} className='btn btn-info'>-</button>
            &nbsp;
            <button onClick={incrementCart} className='btn btn-info'>+</button>
    </div>
}

export default CartOption