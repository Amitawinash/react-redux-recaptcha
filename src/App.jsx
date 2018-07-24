import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HeaderNavBar from './components/HeaderNavBar.jsx';
import MainLayout from './components/MainLayout.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderNavBar />
        <MainLayout />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(store => ({
}))(App));
