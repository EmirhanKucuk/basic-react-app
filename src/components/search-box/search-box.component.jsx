import React from 'react';
import './search-box.style.css'
export const SearchBox = ({handleChange,placeholder}) => {
    return (
        <input className="search-box" onChange={handleChange} 
        type="search" 
        name="search" 
        placeholder= {placeholder}/>
    )
}