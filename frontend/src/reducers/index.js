import {combineReducers} from "redux";
import isLogged from './isLogged';
import isRegister from "./register";


const reducer = combineReducers({
    auth:isLogged,
    reg:isRegister
})

export default reducer;