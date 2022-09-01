import React from 'react';
import "./Resumeload.css";
import { Link } from "react-router-dom";



const Resumeload = () => {
  return(
        <div className="res">
            <h2 className="res-heading">
            <Link to="/files/DavidHruzaResume.pdf" target="_blank" download>Download my Resume</Link>
            </h2>
            {/* <a href={DHResume}> www.github.com/dhruza88</a> */}
            
        </div>
        

  )
}
 export default Resumeload