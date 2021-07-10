import React from 'react';
import './Button.css';

function Button({ btn, btnAction, dataObj, id, name }) {
        return (
                <button type="button" className={btn} onClick={btnAction} data-obj={dataObj} id={id}>
                        {name}
                </button>
        );
}

export default Button;
