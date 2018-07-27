import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha, isVerifyCaptcha } from '../../actions/captcha';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';
import { storeEmail } from "../../actions/addEmailAction";
import MyApp from '../appComponents/MyApp.jsx'
import { withRouter } from 'react-router-dom';
import config from '../../config'


class GoogleRecaptcha extends Component {
    constructor(props){
        super(props);
        this.state = {
          isSecurityModal : true,
          email: '',
          seconds: 40,
          email_error:false
        };
        this.onChange = this.onChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submit = this.submit.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    componentWillMount(){
        if (isVerifyCaptcha()) {
            this.props.history.push("/");
        }
    }

    onChange(value) {
        this.props.dispatch(verifyCaptcha(value,(result) => {
                this.handleClose();
                this.props.history.push("/");
        }));
    }
    
    handleClose(){
        this.setState({isSecurityModal:false});
    }

    submit(){
        this.setState({email_error:false});
        let email_reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email_reg.test(this.state.email)) {
            this.setState({email_error:true});
            return;
        }

        this.props.dispatch(storeEmail(this.state.email,
            (result)=>{
                this.handleClose();
                this.props.history.push("/");
            }
        ));
    }

    setEmail(event){
        this.setState({email:event.target.value});
    }
   

    render() {
        let userDetail = null;
        let email_error = null;

        if (this.state.email_error) {
            email_error =  <h5 className="text-danger">Invalid email</h5>;
        }

        if (this.props.recaptchaReducer.payload != null) {
            userDetail = <div>
                <br/>
                <h1>OR</h1>
                <br/>
                <h3>Provide a valid email id to get unlimate access</h3>{' '}

                    <FormGroup controlId="formInlineEmail">
                        <FormControl type="email"
                        placeholder="abc@example.com"
                        value={this.state.email}
                        onChange={this.setEmail}/>
                    {email_error}
                    </FormGroup>{' '}
                    <Button onClick={this.submit}>Submit</Button>
            </div>
        }
       
        return (
            <MyApp>
                <Modal show={this.state.isSecurityModal}>
                    <Modal.Body>
                        <h3>Verify Captcha and get {this.state.seconds} seconds access</h3>
                        <ReCAPTCHA
                            ref="recaptcha" 
                            sitekey= {config.sitekey}
                            onChange={this.onChange}
                        />
                        {userDetail}
                    </Modal.Body>
                </Modal>
            </MyApp>
        )
  }
}

export default withRouter(connect(store => ({
    recaptchaReducer: store.recaptchaReducer
    
}))(GoogleRecaptcha));