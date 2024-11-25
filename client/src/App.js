import React from "react";
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Project from "./routes/project.js";
import Contact from "./routes/contact.js";
import { Route, Routes } from "react-router-dom";

function App(params) {
   return<div>
    <Routes>
    <Route path= "/" element={<Home />} />
   <Route path= "/about" element={<About />} />
   <Route path= "/project" element={<Project />} />
   <Route path= "/contact" element={<Contact />} />
    </Routes>
   
   </div> 
}

export default App;