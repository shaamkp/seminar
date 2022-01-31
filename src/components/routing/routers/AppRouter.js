import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderNav from "../../include/HeaderNav"
import About from "../../screens/About";
import Home from "../../screens/Home";
import Request from "../../screens/Request";
import User from "../../screens/User";

export default function AppRouter() {
    console.log("in app router");
  return (      
  <div>
      <Routes>
          <Route path="/" element={<HeaderNav />}>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/request" element={<Request/>}/>
              <Route path="/user" element={<User/>}/>
          </Route>
      </Routes>
  </div>
  );
}
