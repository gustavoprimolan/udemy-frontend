import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  //FIRST ARGUMENT IS SOME BLOB
  //NEED TO CREATE <div> root AT index.html
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want delete this stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;