import React from "react";

import  "./ErrorModal.css";



const errormodal = (props) => {
  return (
      
      <div id='backdrop' onClick={props.onConfirm}>
        <div id="box">
        <header id='header'>
          <h2>{props.title}</h2>
        </header>
        <div id='content'>
          <p>{props.message}</p>
        </div>
        <footer>
          <button id='invalidclick' onClick={props.onConfirm}>Got it!</button>
        </footer>
      </div>
      </div>
  );
};
export default errormodal;
