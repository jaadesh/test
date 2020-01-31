import React from "react";
import Popup from "reactjs-popup";
// import Barcode from '../../assets/images/barcode.png'
const modalPopup = props => {
  return (
    <Popup open={props.isOpen} closeOnDocumentClick onClose={() => props.closeModal()}>
      <div className="modal">
        <a className="close" onClick={() => props.closeModal()}>
          &times;
            </a>
        <div>
          <div className="header"> {props.modalTitle}</div>
          {props.popupBody}
          <div className="actions">
            <button className="button" onClick={() => props.closeModal()}>Close</button>
          </div>
        </div>
      </div>
    </Popup >

  );
};

export default modalPopup;
