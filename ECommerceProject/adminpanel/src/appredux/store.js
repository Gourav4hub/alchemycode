import { combineReducers ,createStore} from 'redux'

import CategoryReducer from './reducers/CategoryReducer'
import BrandReducer from './reducers/BrandReducer'
import ProductReducer from './reducers/ProductReducer'

var store = createStore(combineReducers({
    categories : CategoryReducer,
    brands : BrandReducer,
    products : ProductReducer
}),{
    categories : [] , brands : [] , products : []
})

export default store