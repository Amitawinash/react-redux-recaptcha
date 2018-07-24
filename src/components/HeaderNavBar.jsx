import React, { Component } from 'react';
import {
  Navbar, Nav, NavItem
} from 'react-bootstrap';

export default class HeaderNavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              React Demo
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#product">
              Product
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#AboutMe">
              About me
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}