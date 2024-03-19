import React, { useState, useEffect } from "react";
import foodList from '../food.json';
import Accordion from "./Accordion";

function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

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
