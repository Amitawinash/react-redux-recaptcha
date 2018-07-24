export default function reducer( state = {  error : null, payload:null }, action ){
    switch( action.type ){
        case "CAPTCHA_START":{
            return {...state, error:null, error:null }
            break;
        }
        case "CAPTCHA_DONE":{
            return {...state, error:null, payload:action.payload, error:null}
            break;
        }
        case "CAPTCHA_ERROR":{
            return {...state, error:action.payload}
            break;
        }
        default:{
            return state;
        }
    }
}