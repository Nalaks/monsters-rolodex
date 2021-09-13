import React from 'react';
import './SearchBox.styles.css';

const SearchBox = ({ handleSearch }) => (
  <>
    <input className="search" type="search" placeholder="Search monsters" onChange={handleSearch} />
  </>
);

export default SearchBox;
