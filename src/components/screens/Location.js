import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Location() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="main">
        <div className="box">
          <h3>Location</h3>
          {location.pathname === "/location" ? <h1>Im in My {location.pathname.replace("/","")}</h1> : ""}
        </div>
      </div>
    </>
  );
}
