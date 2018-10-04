import React, { Component } from 'react';
import './TopView.css';

class TopViewLine extends Component {
  render(){
    return(

      <div className="timeline">

        <div className="container right">
          <div className="content">
            <h1>פרויקטים</h1>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>הגנות</h1>
          </div>
        </div>
        <div className="container right">
            <div className="content">
              <h1>הפקת דיפלומה</h1>
            </div>
        </div>
      </div>
        );

  }
}
export default TopViewLine;
