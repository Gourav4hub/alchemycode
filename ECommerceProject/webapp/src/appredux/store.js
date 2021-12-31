import { combineReducers ,createStore} from 'redux'

import MasterReducer from './reducers/MasterReducer'
import FilterReducer from './reducers/FilterReducer'
import UserReducer from './reducers/UserReducer'

var store = createStore(combineReducers({
    masterdata : MasterReducer,
    filter : FilterReducer,
    user : UserReducer
}),{
    masterdata : { categories : [] , brands : [] , products : [] } ,
    filter : { categories : [] , brands : []  } ,
    user : { loginstatus : false, token : undefined , username : undefined}
})

export default store