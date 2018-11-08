import React from 'react';
import Modal from 'react-modal';
import './AQMessageBox.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
const customStyles = {
  content : {
    top                   : '45%',
    left                  : '50%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '14cm',
    width                 : '10cm',
    background            : '#f9e195',
    borderRadius          : '15%'



  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

 export default class AQMessageBox extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      rtl : 'right',
      arrmsg:[{
        sender    : 'harel',
        date      : '20/10/2018',
        content   : 'חדגלחגלדשחגלשדחגלחשדגלחדשלחגשדלחגדשחגלךדשחגלךשחדגךלדשחגלךדשחךגלחשדךגחךשחךלחדשלךגחשדלךחגדךשחגלךשדחגלךחגלךשדחגלךדחגדלך',
        idMessage :  1,
              } ,
              {
        sender    : 'moshe',
        date      : '20/11/2018',
        content   : 'moshe is the king',
        idMessage :  2,
              }],
      currentmsg : {
        sender    :  '',
        date      :  '',
        content   :  '',
        idMessage : null ,

              }

    };

    // this.openModal = this.openModal.bind(this);
    this.switchRtl = this.switchRtl.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  switchRtl(){
    let switchChoice = this.state.rtl;
    if(switchChoice==='left')
      switchChoice='right';
    else {
      switchChoice='left';
    }
    this.setState({
      rtl : switchChoice
    })
  }
  openModal=(x)=> {
    let currentmsg = {
      sender    :  x.sender,
      date      :  x.date,
      content   :  x.content,
      idMessage :  x.idMessage ,
    }

    this.setState({
      modalIsOpen  : true,
      currentmsg   : currentmsg,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const styler = {
      textAlign        : 'this.state.rtl',

    }
    return (
      <div >
      <Dropdown>
        <DropdownToggle nav caret><span className="badge">{this.state.arrmsg.length}</span><i className="fa fa-bell-o" id="BellIcon"></i></DropdownToggle>
          <DropdownMenu>
            {
             this.state.arrmsg.map(x=>
                      <DropdownItem onClick={()=>this.openModal(x)} key={x.idMessage}>{x.sender}</DropdownItem>
                                  )
           }

        </DropdownMenu>
    </Dropdown>
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >


          <div><i className="fa fa-bell-o" id="BellIcon1"></i></div>
          <div className="row">
              <div className="col-sm-6"><b>{this.state.currentmsg.date}</b><label> : בתאריך</label></div>

              <div className="col-sm-6" id="senderName"><b>{this.state.currentmsg.sender}</b><label> : מ</label></div>
          </div>
          <div id="content">{this.state.currentmsg.content}</div>

        <div id="foot">
          <div className="demo">
            <form>
            <textarea style={styler} dir="rtl" id="footer" placeholder="send a message" required></textarea>

            </form>
          </div>


         <div className="OptionButton">

            <i className="glyphicon glyphicon-remove option" onClick={this.closeModal}/>
            <i className="glyphicon glyphicon-envelope option"/>
            <i className="glyphicon glyphicon-retweet option" onClick={this.switchRtl}/>

          </div>
          </div>


        </Modal>
      </div>
    );
  }
}
