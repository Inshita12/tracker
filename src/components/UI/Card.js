import React from 'react';
import "./Card.css";
const  Card=(props)=> {
  const id = ' card ' + props.className;
  
  return <div className={id}>{props.children}</div>;
}

export default Card;
