import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Photo from "../pages/Photo.jsx";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
