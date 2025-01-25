import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup"
import React from "react";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;