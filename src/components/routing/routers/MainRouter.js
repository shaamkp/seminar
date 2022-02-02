import {React,useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter";

export default function MainRouter() {
  

  return (
    <div>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </div>
  );
}
