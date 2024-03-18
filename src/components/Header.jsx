import React, { useState, useEffect } from "react";
import { IoFastFoodSharp } from "react-icons/io5";

function Header() {

    return (
        <header>
            <h1>Food Tracker</h1>
            <IoFastFoodSharp size={40} />
        </header>
    )
}

export default Header;
