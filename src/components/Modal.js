import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

import Overlay from './overlay';
import { centerEl } from '../utils/utils';

const Modal = (props) => {
  const [showOverlay, setOverlay]  = useState(props.showOverlay || false)

  useEffect(() => {
    centerEl(document.querySelector('.modal'), {y: -60})
  }, [])

  const renderModal = () => {
    if(props.showModal) {
      return (
        <>
          {showOverlay && <Overlay />}
          <div className="modal">
            <i className="fas fa-times-circle close-me" onClick={props.closeModal}></i>
            {props.children} 
          </div>
        </>
      )
    }
  }

  return ReactDOM.createPortal(renderModal(), document.querySelector('body'))

}
export { Modal as default }