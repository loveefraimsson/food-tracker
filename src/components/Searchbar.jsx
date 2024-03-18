import React, { useState, useEffect } from "react";
import foodList from '../food.json';

function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(foodList);

    const handleInputChange = (event) => {
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



    return (
        <>

            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />

            <button onClick={handleSearch}>Sök!</button>      
        </>
    )
}

export default Searchbar;
