import "./Footer.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Renton</p>
                            <p>Washington,USA</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            908-798-3246</h4>

                    </div>
                    <div className="email">
                        <h4>  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <a href={"mailto: davidhruza@gmail.com"}>davidhruza@gmail.com</a></h4>

                    </div>
                    <div className="email">
                        <h4>  <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <a href={"www.github.com/dhruza88"}> www.github.com/dhruza88</a></h4>

                    </div>
                </div>
                <div className="right">
                <h4>About the company</h4>
                <p>My name is David Hruza, I am an aspiring full stack developer, learning to use every aspect of Javascript i can. This portfolio specifically focusing on REACT.</p>
                </div>
                
                <div className="social">
                    <FaFacebook
                        size={30}
                        style={{ color: "#fff", marginRight: "1rem" }}
                    />
                    <FaTwitter
                        size={30}
                        style={{ color: "#fff", marginRight: "1rem" }}
                    />
                    <FaLinkedin
                        size={30}
                        style={{ color: "#fff", marginRight: "1rem" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer