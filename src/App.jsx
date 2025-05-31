import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import FavoriteFood from './components/FavoriteFood';
import Recipe from './components/Recipe';
import { nanoid } from 'nanoid';

import {
  Route,
  Routes,
} from "react-router-dom";



function App() {

  const [allRecipes, setAllRecipes] = useState(JSON.parse(localStorage.getItem('allRecipes')) ? JSON.parse(localStorage.getItem('allRecipes')) : []);


  
  //Updates localStorage when a recipe is addad
  useEffect(() => {
      localStorage.setItem('allRecipes', JSON.stringify(allRecipes))
  }, [allRecipes])


  //Adds new recipe in allRecipe state
  function addRecipe(recipeNameInput) {
      console.log(recipeNameInput);
    
      setAllRecipes(prevState => {
          return[...prevState, {recipeName: recipeNameInput, id: nanoid(5), recipeContent: []}]
      })  
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Searchbar allRecipes={allRecipes} addRecipe={addRecipe} />} />
        <Route path='/favoritefood' element={<FavoriteFood />} />
        <Route path='/recipe' element={<Recipe allRecipes={allRecipes} />} />
      </Routes>
    </>
  )
}
export default App;
