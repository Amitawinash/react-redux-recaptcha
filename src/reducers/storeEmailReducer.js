export default function reducer( state = {  error : null, payload:null }, action ){
    switch( action.type ){
        case "STORE_EMAIL_START":{
            return {...state, error:null, error:null }
            break;
        }
        case "STORE_EMAIL_DONE":{
            return {...state, error:null, payload:action.payload, error:null}
            break;
        }
        case "STORE_EMAIL_ERROR":{
            return {...state, error:action.payload}
            break;
        }
        default:{
            return state;
        }
    }
}
