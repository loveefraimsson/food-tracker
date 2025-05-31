import React, { useEffect, useState } from "react";

function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isFavoriteMarked, setIsFavoriteMarked] = useState(false);
    const [foodProduct, setFoodProduct] = useState(props.item);
    const [selectedRecipe, setSelectedRecipe] = useState('')

    //Adds food item as favorite to localStorage
    function handleFavorite(item) {
        setIsFavoriteMarked(prevState => !prevState);
    }


    //Toggles favorite marked
    useEffect(() => {
        let favoriteFoodFromLS = JSON.parse(localStorage.getItem('favoriteFood')) ? JSON.parse(localStorage.getItem('favoriteFood')) : [];
        
        favoriteFoodFromLS.map((food) => {
            if(food.Livsmedelsnummer !== props.item.Livsmedelsnummer) {
                setIsFavoriteMarked(true)
            }
        })
    }, [])


    //When product is favorite marked toggled, it saves the result to localStorage
    useEffect(() => {
        if(isFavoriteMarked) {
            let favoriteFood = JSON.parse(localStorage.getItem('favoriteFood')) ? JSON.parse(localStorage.getItem('favoriteFood')) : [];
            favoriteFood.push(props.item);
            localStorage.setItem("favoriteFood", JSON.stringify(favoriteFood));

        } else {

            let favoriteFood = JSON.parse(localStorage.getItem('favoriteFood')) ? JSON.parse(localStorage.getItem('favoriteFood')) : [];
            let itemToRemove = props.item;

            let filteredFood = favoriteFood.filter((foods) => foods.Livsmedelsnummer !== itemToRemove.Livsmedelsnummer);
            localStorage.setItem('favoriteFood', JSON.stringify(filteredFood))
        }
    }, [isFavoriteMarked])
    

    function recipeSelect(event) {
        setSelectedRecipe(event.target.value);
    }


    return(
        <section className="accordionItem" key={props.Livsmedelsnamn}>
            <div className="accordionTitle" onClick={() => setIsOpen(!isOpen)}>
                <p>{props.item.Livsmedelsnamn}</p>
                <div>{isOpen ? '-' : '+'}</div>
                
            </div>
            {isOpen && <div className="accordionContent">
                <span>Per 100 gram:</span>
                <p>Kalorier: {props.item['Energi (kcal)']} kcal</p>
                <p>Protein: {props.item['Protein (g)']}g</p>
                <p>Kolhydrater: {props.item['Kolhydrater, tillgängliga (g)']}g</p>
                <p>Fett: {props.item['Fett, totalt (g)']}g</p>
                <button onClick={() => handleFavorite(props.item)} id="favoriteMark">{isFavoriteMarked ? 'Ta bort som favorit' : 'Favoritmarkera'}</button> <br />

                <select name="recipes" id="recipesSelect" onChange={recipeSelect}>
                    {
                        props.allRecipes ?
                        props.allRecipes.map((recipe) => {
                            return (
                                <option key={recipe.id} value={recipe.id}>{recipe.recipeName}</option>
                            )
                        })
                        : []
                    }
                </select>

                <button onClick={() => {props.addToRecipe(selectedRecipe, foodProduct)}} id="addToRecipe">Lägg till i recept</button>
            </div>}
            
        </section>
    )
}

export default Accordion;
