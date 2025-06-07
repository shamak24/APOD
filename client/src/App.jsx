import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Today from "./pages/Today";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/random" element={<Random />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
