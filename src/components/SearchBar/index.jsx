import React from 'react';

function SearchBar({ inputValue, searchOnChange, placeholder, onKeyDown }) {
        return (
                <input
                        type="text"
                        value={inputValue}
                        onChange={searchOnChange}
                        placeholder={placeholder}
                        onKeyDown={onKeyDown}
                />
        );
}

export default SearchBar;
