import "./workCard.css"

import React from 'react'

// import { NavLink} from "react-router-dom";


const workCard = (props) => {
    return (
        <div className="project-card">
            <div>
                <img src={props.imgsrc} alt="image" />
            </div>
            <div>
                <h2 className="project-title">{props.title}</h2>
            </div>
            <div className="pro-details">
                <p>{props.text}</p>
            </div>
            <div className="pro-btns">
                < a className="btn" target="_blank" href={props.view}>View</a>
                < a className="btn" target="_blank" href={props.source}>Source</a>
            </div>
        </div>
    );
};


{/* <a style={{color:"white", textDecoration:"underline", textAlign:"center"}} target='_blank' href={props.repo}>Github Repo</a>
        <a style={{color:"white", textDecoration:"underline", textAlign:"center"}} target='_blank' href={props.demo}>Live Demo</a> */}

export default workCard