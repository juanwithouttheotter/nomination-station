import React from 'react';
import './ContainerItem.css';

function ContainerItem({ order, flex, alignSelf, children, id }) {
    let classString = (order ? `order-${order} ` : '') + (alignSelf ? `as-${alignSelf} ` : '') + (flex ? `flex-${flex} ` : '');
    return <div id={id} className={classString}>{children}</div>
}

export default ContainerItem;