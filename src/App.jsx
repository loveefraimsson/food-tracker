import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import foodList from './food.json';
import FavoriteFood from './components/FavoriteFood';


function App() {
  
 

  return (
    <>
      <Header />
      <Searchbar />
    </>
  )
}

export default App
