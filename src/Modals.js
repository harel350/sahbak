import React from 'react';
import Modal from 'react-modal';
import './Modals.css';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '10cm',
    width                 : '10cm',
    background            : '#f9e195',
    borderRadius          : '15%'



  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

 export default class Modals extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      RTL : 'left'
    };

    this.openModal = this.openModal.bind(this);
    this.switchRtl = this.switchRtl.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  switchRtl(){
    let switchChoice = this.state.RTL;
    if(switchChoice==='left')
      switchChoice='right';
    else {
      switchChoice='left';
    }
    this.setState({
      RTL : switchChoice
    })
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const MessageBox = {
      background        :  'hsl(65,100%,80%)',
      height            : '4.6cm',
      width             : '8cm',
      verticalAlign     : '15%',
      textAlign         : this.state.RTL
    }
    return (
      <div >
        <i className="glyphicon glyphicon-envelope" id="MsgIcon" onClick={this.openModal}></i>
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >

          <div><i className="glyphicon glyphicon-envelope" id="MsgIcon1"></i></div>

          <div className="demo">
            <form>
            <input  placeholder="enter name" id="InputLine"/>
            <label> :שלח אל</label>
            </form>
          </div>
          <div className="demo">
            <form>
            <textarea style={MessageBox} dir="rtl" placeholder="What's up?" required></textarea>

            </form>
          </div>
         <div className="OptionButton">

            <i className="glyphicon glyphicon-remove option" onClick={this.closeModal}/>
            <i className="glyphicon glyphicon-envelope option"/>
            <i className="glyphicon glyphicon-retweet option" onClick={this.switchRtl}/>

          </div>

        </Modal>
      </div>
    );
  }
}
