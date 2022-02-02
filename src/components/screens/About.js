import React from "react";
import {  useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  return (
    <div>
      <h1>About</h1>
      {location.pathname === "/about" ? (
        <h1>Im in My {location.pathname}</h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default About;
