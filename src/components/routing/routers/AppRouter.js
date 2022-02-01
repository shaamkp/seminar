import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderNav from "../../include/HeaderNav"
import About from "../../screens/About";
import Home from "../../screens/Home";
import Request from "../../screens/Request";
import User from "../../screens/User";
import GetRequest from "../../screens/GetRequest";
import Location from "../../screens/Location";
import Put from "../../screens/Put";
import SingleUser from "../../screens/SingleUser";

export default function AppRouter() {
    console.log("in app router");
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/request" element={<Request />} />
          <Route path="/put" element={<Put />} />
          <Route path="/getreq" element={<GetRequest />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/location" element={<Location />} />
          <Route path="/single/:id" element={<SingleUser />} />
        </Route>
      </Routes>
    </div>   
  );
} 
