import React, { useState, useEffect } from "react";

function FavoriteFood(props) {

    const [favoritefood, setFavoritefood] = useState(JSON.parse(localStorage.getItem('favoriteFood')));

    function removeFavoriteMark(food) {
        let originalFood = JSON.parse(localStorage.getItem('favoriteFood'));        
        let filteredFood = originalFood.filter((foods) => foods.Livsmedelsnummer !== food.Livsmedelsnummer);
        setFavoritefood(filteredFood);
    }


    useEffect(() => {
        localStorage.setItem('favoriteFood', JSON.stringify(favoritefood));
    }, [favoritefood])


    return (
        <>
            <h1>Din favoritmat</h1>
            
           {
                favoritefood ?

                favoritefood.map((food) => {
                    return (
                        <section className="favoriteFoodSection" key={food.Livsmedelsnummer}>
                            <p>{food.Livsmedelsnamn}</p>
                            <button onClick={() => removeFavoriteMark(food)} className="removeFavorite">Ta bort</button>
                        </section>
                    )
                })
                : null
            }

        </>
        
    )
}


export default FavoriteFood;
