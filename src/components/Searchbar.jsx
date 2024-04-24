import React, { useState, useEffect } from "react";
import Header from "./Header";
import foodList from '../food.json';
import Accordion from "./Accordion";

function Searchbar(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [favoritefood, setFavoritefood] = useState([]);

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
            <h2>Sök</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSearch();
                    }}
            />

            <button onClick={handleSearch}>Sök!</button> 

            <section className="accordion">
                {
                    filteredData.map((item) => {
                        return (
                           <Accordion key={item.Livsmedelsnamn} item={item} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Searchbar;
