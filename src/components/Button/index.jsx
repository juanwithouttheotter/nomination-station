import React from 'react';

function Button(props){
   return <button className={props.btn} onClick={props.btnAction}>{props.name}</button>
}

export default Button;