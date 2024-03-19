import React, { useState, useEffect } from "react";


function Searchbar(props) {

    



    return (
        <>

            <input
                type="text"
                placeholder="Search..."
                value={props.searchTerm}
                onChange={props.handleInputChange}
            />

            <button onClick={props.handleSearch}>Sök!</button>      
        </>
    )
}

export default Searchbar;
