import React, { useState } from "react";

function PeopleCard(props) {
    const [isClicked, setIsClicked] = useState(false);



    return (
        <li style={{ listStyle: "none" }}>
            <img src={props.picture}></img>
            <h3>{props.name}</h3>
            {isClicked ?

                <div><h4>{props.gender}</h4>
                    <h4>{props.email}</h4>
                    <h4>{props.cell}</h4>
                    <h4 style={{ wordSpacing: 5 }}>
                        {`City: ${props.city},   
            State: ${props.state},   
            Country: ${props.country}`}</h4>
            <button onClick={() => setIsClicked(!isClicked)}>
                Show Less 
            </button>
            </div> 
            : <div>
                    <button onClick={() => setIsClicked(!isClicked)}>
                        Show More
                    </button>
                    
                </div>}

            {/* show less details when clicked */}
        </li>
    )
}

export default PeopleCard