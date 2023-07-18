//root reducer => connect all the reducers

import {combineReducers} from "redux"
import cardItems from "./reducer";

export default combineReducers({
    cardItems,
});