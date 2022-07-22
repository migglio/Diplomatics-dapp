import React from "react";
import './Land.css';

function Land (props) {
    return (
        <div className="LandsContainerItem">
            <img 
                className="LandsImage"
                alt="Image of the Promised Lands NFTs" 
                src={props.imgsrc}>
            </img>
            <button className="LandsButton">MINT</button>
        </div>
    );
}

export { Land };