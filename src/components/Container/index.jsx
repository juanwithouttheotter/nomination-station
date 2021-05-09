import React from 'react';
import './Container.css';

function Container(props){
    let classString = (`.${props.diplay} `)+(props.flow ? `.f-${props.flow} ` :' ')+(props.justifyContent ? `.jc-${props.justifyContent} `:' ')+(props.alignItems ? `.ai-${props.alignItems} `: ' ')
   return <div className={classString}></div>
}

export default Container;