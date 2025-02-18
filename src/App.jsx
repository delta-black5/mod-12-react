//import React, { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
    {/* this is the default page*/}
        <Route path="/" element={<Resume />} /> 
      </Routes>
    </Router>
  );
};


export default App
