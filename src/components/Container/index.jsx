import React, { Children } from 'react';
import './Container.css';

function Container({display, flow, justifyContent, alignItems, children, id}) {
    let classString = (display ? `${display} ` : '') + (flow ? `f-${flow} ` : '') + (justifyContent ? `jc-${justifyContent} ` : '') + (alignItems ? `ai-${alignItems} ` : '')
    return <div id={id} className={classString}>{children}</div>
}

export default Container;