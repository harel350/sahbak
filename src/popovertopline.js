import React, { Component } from 'react';
import './Popovertopline.css';

function popMessage(x){

  switch(x){
    case 1:
      return <div>{PopoverOffer}</div>

    case 2:
      return <div>{PopoverDefense}</div>
    case 3:
      return <div>{PopoverDiploma}</div>
    default: return <div>{PopoverDiploma}</div>

  }
}
const PopoverOffer = (
      <div>
        <ul className="demo">
          <li><b>עבר לבוחן</b> <i className="glyphicon glyphicon-arrow-left"></i> 12</li>
          <li><b>חזר מהבוחן</b> <i className="glyphicon glyphicon-arrow-left"></i> 7</li>
          <li><b>עבר למהט</b> <i className="glyphicon glyphicon-arrow-left"></i> 6</li>
          <li><b>חזר ממהט</b> <i className="glyphicon glyphicon-arrow-left"></i> 5</li>
        </ul>
      </div>
    );
const PopoverDefense = (
      <div>
        <ul className="demo">
          <li><b>מחכה להגנה</b> <i className="glyphicon glyphicon-arrow-left"></i> 10 </li>
          <li><b>זומן להגנה</b> <i className="glyphicon glyphicon-arrow-left"></i> 12 </li>
        </ul>
      </div>
    );
const PopoverDiploma = (
    <div>
      <ul className="demo">
        <li><b>מחכה לדיפלומה</b> <i className="glyphicon glyphicon-arrow-left"></i> 12</li>
        <li><b>הופקה דיפלומה</b> <i className="glyphicon glyphicon-arrow-left"></i>  5</li>
        <li><b>חזר חתום</b> <i className="glyphicon glyphicon-arrow-left"></i> 5</li>
      </ul>
    </div>

  );

class PopoverTopline extends Component {

  render() {
    return(
      <div>
        {popMessage(this.props.y)}
      </div>
    );
  }
}

export default PopoverTopline;
