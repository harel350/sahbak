import React, { Component } from 'react';
import NavbarMenu from '../HomePage/Navigation.js';

import '../HomePage/HomePage.css';
import  Table from './table.js';

class TablePage extends Component {
  render() {

    return (
      <div >
        <div>
          <NavbarMenu/>
        </div>
        <div>
          <Table/>
        </div>


      </div>
    );
  }
}


export default TablePage;
