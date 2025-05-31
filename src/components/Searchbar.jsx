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
    //const [allRecipes, setAllRecipes] = useState(JSON.parse(localStorage.getItem('allRecipes')) ? JSON.parse(localStorage.getItem('allRecipes')) : []);
    const [allRecipes, setAllRecipes] = useState(props.allRecipes)


    //Saves all recipes in localStorage when a new recipe is added
    useEffect(() => {
        localStorage.setItem('allRecipes', JSON.stringify(allRecipes))
    }, [allRecipes])


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


    //Add recipe
    function addRecipeNameInput(event) {
        setRecipeNameInput(event.target.value)
    }


    function addRecipe() {
        setAllRecipes(prevState => {
            return[...prevState, {recipeName: recipeNameInput, id: nanoid(5), recipeContent: []}]
        })       
    }


    function addToRecipe(selectedRecipe, foodProduct) {
        //console.log('selectedRecipe', selectedRecipe);
        //console.log('foodProduct', foodProduct);

        setAllRecipes()
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
                        onChange={addRecipeNameInput}
                    
                    />
                    <button onClick={addRecipe}>Lägg till recept</button>
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
