import React, { useState } from "react";

function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if(!isOpen) {
            setIsOpen(false)
        }
    }

    return(
        <section className="accordionItem" key={props.Livsmedelsnamn}>
            <div className="accordionTitle" onClick={() => setIsOpen(!isOpen)}>
                <p>{props.item.Livsmedelsnamn}</p>
                <div>{isOpen ? '-' : '+'}</div>
                
            </div>
            {isOpen && <div className="accordionContent">
                <span>Per 100 gram:</span>
                <p>Kalorier: {props.item['Energi (kcal)']} kcal</p>
                <p>Protein: {props.item['Protein (g)']}g</p>
                <p>Kolhydrater: {props.item['Kolhydrater, tillgängliga (g)']}g</p>
                <p>Fett: {props.item['Fett, totalt (g)']}g</p>

                <button onClick={handleClick}>Favoritmarkera</button>
                <button>Lägg till i recept</button>
            </div>}
            
        </section>
    )
}

export default Accordion;
