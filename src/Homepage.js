import React from "react";
import "./homepage.css";
import Navigation from "./navigation/Navigation";
import Timeline from "./timeline/Timeline";
import Botoomnav from "./timeline/Botoomnav";

const Homepage = () => {
  return (
   
      <div className="homepage">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="timeline">
          <Timeline />
        </div>
      </div>
      
    
  );
};

export default Homepage;
