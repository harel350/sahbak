import React, { Component } from 'react';
import NavbarMenu from './Navigation.js';
import TopViewLine from './Topview.js';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    return (
      <div >
          <div>
          <NavbarMenu/>
          </div>
          <div>
          <TopViewLine/>
          </div>



      </div>
    );
  }
}


export default App;
