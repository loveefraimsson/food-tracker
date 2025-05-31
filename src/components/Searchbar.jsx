import React, { useState, useEffect } from "react";
import Header from "./Header";
import foodList from '../food.json';
import Accordion from "./Accordion";
import { nanoid } from 'nanoid';

function Searchbar(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [favoritefood, setFavoritefood] = useState([]);
    const [recipeNameInput, setRecipeNameInput] = useState('');
    const [allRecipes, setAllRecipes] = useState(props.allRecipes)


    //Search function
    const handleSearchInput = (event) => {
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


    //Add recipe name in state
    function addRecipeNameInput(event) {
        setRecipeNameInput(event.target.value)
    }


    function addToRecipe(selectedRecipe, foodProduct) {
        
    }

    function addRecipeFunction(recipeNameInput) {
        props.addRecipe(recipeNameInput);
        setRecipeNameInput('');
    }

    

    return (
        <section className="searchPage">  
            <section className="upperSection">
                <section className="searchContainer">
                    <h2>Sök</h2>
                    <input
                        type="text"
                        placeholder="Sök..."
                        value={searchTerm}
                        onChange={handleSearchInput}
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                handleSearch();
                            }}
                    />
                    <button onClick={handleSearch}>Sök!</button> 
                </section>

                <section className="addRecipeContainer">
                    <input 
                        type="text"
                        placeholder="Lägg till recept..."
                        value={recipeNameInput}
                        onChange={addRecipeNameInput}
                    
                    />
                    <button onClick={() => addRecipeFunction(recipeNameInput)}>Lägg till recept</button>

                </section>
                
            </section>
            



            <section className="accordion">
                {
                    filteredData.map((item) => {
                        return (
                            <Accordion 
                                key={item.Livsmedelsnamn} 
                                item={item}
                                allRecipes={allRecipes}
                                addToRecipe={addToRecipe}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Searchbar;
