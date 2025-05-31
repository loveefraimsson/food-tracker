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

  /* const [allRecipes, setAllRecipes] = useState(JSON.parse(localStorage.getItem('allRecipes')) ? JSON.parse(localStorage.getItem('allRecipes')) : []); */
  const [allRecipes, setAllRecipes] = useState('Alla recept');


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Searchbar allRecipes={allRecipes} />} />
        <Route path='/favoritefood' element={<FavoriteFood />} />
        <Route path='/recipe' element={<Recipe />} />
      </Routes>
    </>
  )
}
export default App;
