import {combineReducers} from "redux";
import recaptchaReducer from './recaptchaReducer';
import storeEmailReducer from './storeEmailReducer';


export default combineReducers({
    recaptchaReducer,
    storeEmailReducer
});