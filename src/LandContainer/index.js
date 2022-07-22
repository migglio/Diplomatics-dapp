import React from "react";
import './LandsContainer.css';
import { Land } from '../Land';

function LandsContainer () {
    return (
        <section className="LandsContainer">
            <Land imgsrc={"land-turca.jpeg"} />
            <Land imgsrc={"land-arabe.jpeg"} />
            <Land imgsrc={"land-arabe.jpeg"} />
            <Land imgsrc={"land-turca.jpeg"} />
        </section>
    );
}

export { LandsContainer };