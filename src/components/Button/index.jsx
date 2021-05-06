import React from 'react';

function Button(props){
   return <button class={props.btn} onClick={props.btnAction}></button>
}

export default Button;