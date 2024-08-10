import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Features from "./pages/Features.js";
import Pricing from "./pages/Pricing.js";
import Home from "./pages/Home.js";
import Footer from "./pages/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
