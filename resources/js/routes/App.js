import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages";
import Home from "../pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
