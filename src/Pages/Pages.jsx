import React from 'react'
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cuisine/:type' element={<Cuisine/>} />
        </Routes>
    
  );
}

export default Pages;