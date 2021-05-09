//functional component
import React from 'react';

function SearchBar (props) {
    return <input type='text' value={props.inputValue} onChange={props.searchOnChange} placeholder={props.placeholder} onKeyDown={props.onKeyDown}></input>
}

export default SearchBar;