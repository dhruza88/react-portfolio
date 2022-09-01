import "./Heroimg.css"

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"

import {Link} from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi I am a Full Stack Developer</p>
            <h1>Specifically in React.js</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg