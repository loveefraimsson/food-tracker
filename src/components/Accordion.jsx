import React, { useEffect, useState } from "react";

function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isFavoriteMarked, setIsFavoriteMarked] = useState(false);
    const [foodProduct, setFoodProduct] = useState(props.item)

    //Adds food item as favorite to localStorage
    function handleFavorite(item) {
        setIsFavoriteMarked(prevState => !prevState);
    }


    useEffect(() => {
        let favoriteFoodFromLS = JSON.parse(localStorage.getItem('favoriteFood'));
        
        favoriteFoodFromLS.map((food) => {
            if(food.Livsmedelsnummer !== props.item.Livsmedelsnummer) {
                setIsFavoriteMarked(true)
            }
        })
    }, [])

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

                <select name="" id="">
                    <option value="">Recept 1</option>
                    <option value="">Recept 2</option>
                    <option value="">Recept 3</option>
                </select>

                <button onClick={props.handleClick} id="addToRecipe">Lägg till i recept</button>
            </div>}
            
        </section>
    )
}

export default Accordion;
