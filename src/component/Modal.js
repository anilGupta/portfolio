import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';
import Config from '../constants/Config';

class Modal extends Component{

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
     this.props.close();
  }

  render(){
    const { open, title, close,  children } = this.props;
    return (
      <div className={`modal-box-wrapper ${open ? 'open': 'hide'}`}>
        <div className={`modal-box ${open ? 'open': 'hide'}`}>
          <div className="modal-box-content relative">
            <div className="modal-box-title">{title} <span className="closeBtn" onClick={close} /></div>
            <div className={`modal-box-body`}>
              {children}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Modal;