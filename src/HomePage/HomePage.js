import React, { Component } from 'react';
import NavbarMenu from './Navigation.js';
import TopViewLine from './Topview.js';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
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


export default HomePage;
