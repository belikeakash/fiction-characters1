import React, { useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import SearchResults from "./SearchResults";
function App() {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);
  async function searchSUperHeroes() {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/130702602589533/search/${searchText}`
    );
    const data = await response.json();
    console.log(data);
    setSuperheroData(data.results)
  }
  function handleChange(e) {
    const searchTerm = e.target.value;
    // console.log(searchTerm)
    setSearchText(searchTerm);
    if(searchTerm .length === 0){
      setSuperheroData([])
    }
    if (searchTerm.length > 3) {
        searchSUperHeroes();
    }
  }
  return (
    <div>
      <Navbar />
      <Searchbar searchText={searchText} setSearchText={setSearchText} handleChange={handleChange} />
      <SearchResults superheroData={superheroData} />
    </div>
  );
}

export default App;
