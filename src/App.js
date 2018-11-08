import React, { Component } from 'react';
import NavbarMenu from './Navigation.js';
import TopViewLine from './Topview.js';
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
