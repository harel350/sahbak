import React, { Component } from 'react';
import './CssComponent/Table.css';


class Table extends  Component {
  render() {
    return(
      <div id="body">
        <div>
          <h1 id="h1Table">: טבלאות ממוינות לפי סטטוסים </h1>
        </div>
        <div className="row">
    <div className="col-md-3">
      <div className="card-counter primary">
        <i className="	fa fa-superscript"></i>
        <span className="count-numbers">12</span>
        <span className="count-name">צריכים להיבחן</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter danger">
        <i className="glyphicon glyphicon-time"></i>
        <span className="count-numbers">599</span>
        <span className="count-name">ממתנים להגנה</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter success">
        <i className="fa fa-book"></i>
        <span className="count-numbers">6875</span>
        <span className="count-name">הגישו פרויקט</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter info">
        <i className="fa fa-graduation-cap"></i>
        <span className="count-numbers">35</span>
        <span className="count-name">ממתינים להנפקת דיפלומה</span>
      </div>
    </div>







          </div>
        </div>

    );
  }
}

export default Table;
