import React, { Component } from 'react';
import {connect} from 'react-redux';

import { withRouter } from 'react-router';


import { isVerifyCaptcha } from "../../actions/captcha";

 class MyApp extends Component {
    constructor(props){
        super(props);
      }
    componentWillMount(){
        if (!isVerifyCaptcha()) {
            this.props.history.push("/captcha");
        }
    }
    render() {
        return (
        <div>
            {this.props.children}
        </div>
        )
    }
}


export default withRouter(connect(store => ({
    
}))(MyApp));