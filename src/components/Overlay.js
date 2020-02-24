import React from 'react';
import ReactDOM from 'react-dom'

const Overlay = () => {

  const renderOverlay = () => {
    return (
      <div className="overlay"></div>
    )  
  }

  return ReactDOM.createPortal(renderOverlay(), document.querySelector('body'))

}

export { Overlay as default }