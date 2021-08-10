import React from "react";
import './Search.css'
function SearchResultItem(props) {
  const {data} = props;
  console.log(data) ;
  return (
    <div>
      <div className="search-result">
        <div className="left">
          <img
            src={data.image.url}
            alt="Hero"
          />
        </div>
        <div className="right">
          <div className='test'>{data.name}</div>
          <h4> Real Identity : {data.biography['full-name']}</h4>
          <div className="stats">
            <div>Strength : {data.powerstats.strength}</div>
            <div>Speed : {data.powerstats.speed}</div>
            <div>Resistance {data.powerstats.power}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
