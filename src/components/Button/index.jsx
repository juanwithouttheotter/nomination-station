import React from 'react';
import "./Button.css";

function Button(props){
   return <button className={props.btn} onClick={props.btnAction}data-obj={props.dataObj}>{props.name}</button>
}

export default Button;