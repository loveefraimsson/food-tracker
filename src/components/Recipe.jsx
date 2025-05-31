import React, { useState } from "react";

function Recipe(props) {

    const [allRecipes, setAllRecipes] = useState(props.allRecipes)

    return (
        <>
            <h1>Recept</h1>

            {/* <input type="text" />
            <button>Skapa nytt recept</button> */}
        </>
        
    )
}

export default Recipe;
