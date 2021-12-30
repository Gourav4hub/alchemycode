import { combineReducers ,createStore} from 'redux'

import MasterReducer from './reducers/MasterReducer'
import FilterReducer
 from './reducers/FilterReducer'
var store = createStore(combineReducers({
    masterdata : MasterReducer,
    filter : FilterReducer
}),{
    masterdata : { categories : [] , brands : [] , products : [] } ,
    filter : { categories : [] , brands : []  } 
})

export default store