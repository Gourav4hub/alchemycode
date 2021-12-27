import { combineReducers  , createStore } from "redux";

import CartReducer from "./reducers/CartReducer";
import FilterReducer from "./reducers/FilterReducer";

var store = createStore(combineReducers({
                carts : CartReducer , filter : FilterReducer
                }),{ carts : [],
                        filter : {
                        category : undefined,
                        company : undefined,
                        price : undefined
                    }
        })

export default store;