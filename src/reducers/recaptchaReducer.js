export default function reducer( state = { isOpen : true, error : null, payload:null }, action ){
    switch( action.type ){
        case "CAPTCHA_START":{
            return {...state, error:null ,isOpen:true, error:null }
            break;
        }
        case "CAPTCHA_DONE":{
            
            
            return {...state, error:null, payload:action.payload, isOpen:false, error:null}
            break;
        }
        case "CAPTCHA_ERROR":{
            return {...state, error:action.payload, isOpen:true}
            break;
        }
        default:{
            return state;
        }
    }
}