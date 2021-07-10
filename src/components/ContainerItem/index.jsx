import React from 'react';
import './ContainerItem.css';

function ContainerItem({ order, flex, alignSelf, children, id, cls }) {
        const classString =
                (order ? `order-${order} ` : '') +
                (alignSelf ? `as-${alignSelf} ` : '') +
                (flex ? `flex-${flex} ` : '') +
                (cls || '');
        return (
                <div id={id} className={classString}>
                        {children}
                </div>
        );
}

export default ContainerItem;
