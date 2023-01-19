import React from 'react'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import "./App.css";
import Home from "./pages/Home";
import FungsionalModbus from "./pages/FungsionalModbus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fungsionalmodbus" element={<FungsionalModbus/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
