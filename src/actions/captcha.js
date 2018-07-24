import axios from 'axios';
import config from '../config';

export function verifyCaptcha(hash,onDone){
    var url =   config.base_url + '/verify/captcha?nonce=' + (new Date()).getTime();
    
    return function(dispatch){
        dispatch({'type':'CAPTCHA_START'});

        axios.post(url,{hash,'time':moment()})
        .then(function(response){
            console.log(response);
            if (response.data.result.success) {
                dispatch({'type':'CAPTCHA_DONE', payload:response.data.result});
            } else {
                dispatch({'type':'CAPTCHA_ERROR', payload:error.data, isOpen:error.data});  
            }
            sessionStorage.setItem('token', JSON.stringify(response.data.result));
            sessionStorage.setItem('time', JSON.stringify(response.data.time));
            onDone(response);
        })
        .catch(function(error){
            console.log(error);
            dispatch({'type':'CAPTCHA_ERROR',payload:error.data, isOnen:error.data });
        });
    }
}

export function isVerifyCaptcha(){
    let email = JSON.parse(sessionStorage.getItem('email'));
    if (email != null) {
        return true;
    }
    let session = JSON.parse(sessionStorage.getItem('token'));
    let time_now  = moment().subtract(40, 'seconds');;
    let session_time = moment();

    if (session != null) {
      session_time = moment(JSON.parse( sessionStorage.getItem('time')));
      if (time_now > session_time ) {
        sessionStorage.clear();
        return false;
      }
      return true;
    }else{
        return false;
    }
}