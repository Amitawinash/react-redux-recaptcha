import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import WelcomeLayout from './appComponents/WelcomeLayout.jsx';
import AboutMe from "./appComponents/AboutMe.jsx";
import Product from "./appComponents/Product.jsx";
import GoogleRecaptcha from "./commonComponents/GoogleRecaptcha.jsx";

class MainLayout extends React.Component {
 
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={WelcomeLayout} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/captcha" component={GoogleRecaptcha} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  
}))(MainLayout));
