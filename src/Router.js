import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from './HomePage/HomePage.js';
import TablePage from './TablePage/TablePage.js';

const Test = () => {
  return (
    <div>
      <h1>I did IT </h1>
    </div>
  );

}

const Error = () => {
  return (
    <div>
      <h1>path is dose not exist </h1>
    </div>
  );

}


class Routering extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/table' component={TablePage}/>
          <Route   component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default Routering;
