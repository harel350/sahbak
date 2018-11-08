import React, { Component } from 'react';
import {Tooltip } from 'reactstrap';
import './TopView.css';
import PopoverTopline from './popovertopline.js';

class TopViewLine extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);



    this.state = {
      popoverOpen:[false,false,false],
      value: '22',


    };
  }

  toggle () {
      let arrpop=[false,false,false]
      arrpop[0]=!this.state.popoverOpen[0];
      this.setState({
      popoverOpen: arrpop,
    });
  }
  toggle1 () {
      let arrpop=[false,false,false]
      arrpop[1]=!this.state.popoverOpen[1];
      this.setState({
      popoverOpen: arrpop,
    });
  }
  toggle2 () {
      let arrpop=[false,false,false]
      arrpop[2]=!this.state.popoverOpen[2];
      this.setState({
      popoverOpen: arrpop,
    });
  }


  render(){
    var divStyle ={
      background: '#04440b',
      height:'40px',
      width:'40px',
      borderRadius: '50%',
      padding:'10px',
      position:'absolute',
      top:'-20px',
      left:'-1cm',
      fontFamily: 'system-ui',
      fontSize: '15px',
      color:'white',

    };

    return(


      <div className="body" >

          <div className="container">

            <div className="content right">
              <h1>הצעות</h1>
                <div className="line">
                  <div style={divStyle} id="PopoverOffer" onClick={this.toggle} >
                    {this.state.value}
                  </div>
                  <Tooltip placement="left" isOpen={this.state.popoverOpen[0]} toggle={this.toggle} target="PopoverOffer">
                    <PopoverTopline y={1}/>
                  </Tooltip>
                </div>
                </div>

            <div className="content right">
              <h1> הגנות </h1>
                <div className="line">
                  <div style={divStyle} id="PopoverDefense" onClick={this.toggle1}>
                    {this.state.value}
                  </div>
                  <Tooltip placement="left" isOpen={this.state.popoverOpen[1]} toggle={this.toggle1} target="PopoverDefense">
                      <PopoverTopline y={2}/>
                  </Tooltip>
                </div>
             </div>

            <div className="content right">
              <h1> דיפלומות </h1>
                <div className="line">
                  <div style={divStyle} id="PopoverDiploma" onClick={this.toggle2}>
                    {this.state.value}
                  </div>
                  <Tooltip placement="left" isOpen={this.state.popoverOpen[2]} toggle={this.toggle2} target="PopoverDiploma">
                      <PopoverTopline y={3}/>
                  </Tooltip>
                </div>
              </div>

          </div>

      </div>



        );

  }
}
export default TopViewLine;
