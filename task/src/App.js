import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/form/Login";
import { Register } from "./Components/form/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
