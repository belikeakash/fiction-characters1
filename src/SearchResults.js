import React from "react";
import SearchResultItem from "./SearchResultItem";
import './SearchResults.css'
function SearchResults(props) {
  const {superheroData = []} = props;
  console.log(superheroData)
  return (
    <div className='search-results'>
     { superheroData.map(superhero => 
        <SearchResultItem data={superhero} />
      )}
    
        
    </div>
  );
}

export default SearchResults;
