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
            <section className="favoriteFoodSection" >
            <table>
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Kalorier</th>
                        <th>Protein</th>
                        <th>Kolhydrater</th>
                        <th>Fett</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody>
            
           {
                favoritefood ?

                favoritefood.map((food) => {
                    return (
                            <tr key={food.Livsmedelsnummer}>
                                <td>{food.Livsmedelsnamn}</td>
                                <td>{food['Energi (kcal)']}</td>
                                <td>{food['Protein (g)']}g</td>
                                <td>{food['Kolhydrater, tillgängliga (g)']}g</td>
                                <td>{food['Fett, totalt (g)']}g</td>
                                <td><button onClick={() => removeFavoriteMark(food)} className="removeFavorite">Ta bort</button></td>
                            </tr>
                    )
                })
                : null
            }
            </tbody>
            </table>
            </section>

        
            </> 
    )
}


export default FavoriteFood;
