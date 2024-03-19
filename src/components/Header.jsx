import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";



function Header() {

    return (
        <header>
            <h1>Food Tracker</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Sök</Link>
                    </li>
                    <li>
                        <Link to="/favoritefood">Din favoritmat</Link>
                    </li>
                    <li>
                        <Link to="/recipe">Ditt recept</Link>
                    </li>
                </ul>
            </nav>


            <IoFastFoodSharp size={40} />
        </header>
    )
}

export default Header;
