import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import foodList from './food.json';


function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
  };

  function handleSearch() {
      filterData(searchTerm);
  }


  const filterData = (searchTerm) => {
      const filteredData = foodList.filter((item) =>
      item.Livsmedelsnamn.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
  };

  return (
    <>
      <Header />
      <Searchbar 
        searchTerm={searchTerm} 
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch}
      />
    </>
  )
}

export default App
