import React, { useState } from "react";
import './SearchBar.css'
function Searchbar(props) {
  const {handleChange, searchText} = props;
  console.log(props)
  return (
    <div className='input-feild'>
      <input
        id="search-bar"
        type="search"
        placeholder="Search Your Character"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Searchbar;
