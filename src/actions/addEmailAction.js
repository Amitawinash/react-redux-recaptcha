import axios from 'axios';
import config from '../config';

export function storeEmail(email,onDone){
    var url =   config.base_url + "/store/email?nonce=" + (new Date()).getTime();

    return function(dispatch){
        dispatch({'type':'STORE_EMAIL_START'});
        axios.post(url,{email})
        .then(function(response){
            console.log(response);
            dispatch({'type':'STORE_EMAIL_DONE', payload:response.data.result});
            sessionStorage.setItem('email', JSON.stringify(response.data.result));
            onDone(response);
        })
        .catch(function(error){
            console.log(error);
            dispatch({'type':'STORE_EMAIL_ERROR',payload:error.data, isOnen:error.data });
        });
    }
}
