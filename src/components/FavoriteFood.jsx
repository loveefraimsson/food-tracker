import React, { useState, useEffect } from "react";

function FavoriteFood(props) {

    const [favoritefood, setFavoritefood] = useState(JSON.parse(localStorage.getItem('favoriteFood')));

    return (
        <>
            <h1>Din favoritmat</h1>
            
           {
                favoritefood ?

                favoritefood.map((food) => {
                    return (
                        <>
                            <p key={food.Livsmedelsnamn}>{food.Livsmedelsnamn}</p>
                        </>
                    )
                })
                : 'Här var det tomt!'
            }

        </>
        
    )
}


export default FavoriteFood;
