import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import FavoriteFood from './components/FavoriteFood';
import Recipe from './components/Recipe';

import {
  Route,
  Routes,
} from "react-router-dom";



function App() {

  const [favoritefood, setFavoritefood] = useState([]);
  const [test, setTest] = useState('test');

  function handleClick(item) {
    setFavoritefood((prev) => [...prev, item])
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Searchbar handleClick={handleClick} />} />
        <Route path='/favoritefood' element={<FavoriteFood test={'tests'} />} />
        <Route path='/recipe' element={<Recipe />} />
      </Routes>
    </>
  )
}
export default App;
