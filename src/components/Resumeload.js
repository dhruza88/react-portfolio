import React from 'react';
import "./Resumeload.css";
import { Link } from "react-router-dom";



const Resume = () => {
  return(
        <div className="res">
            <h2 className="heading">Resume</h2>
            {/* <a href={DHResume}> www.github.com/dhruza88</a> */}
            <Link to="/files/DavidHruzaResume.pdf" target="_blank" download>Download</Link>
            <a href={"www.github.com/dhruza88"}> www.github.com/dhruza88</a>
        </div>
        

  )
}
 export default Resume