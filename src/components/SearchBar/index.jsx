//functional component
import React from 'react';

function SearchBar (props) {
    return <input type='text' value={props.inputValue} onChange={props.searchOnChange} placeholder={props.placeholder}></input>
}

export default SearchBar;