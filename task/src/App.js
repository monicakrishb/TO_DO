import React from "react";
import "./App.css";
import 'react-bootstrap'
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/form/Login";
import { Register } from "./Components/form/Register";
import Navbar from "./Components/form/Navbar";
import TodoList from "./Components/List/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from "./Components/List/Cards";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TodoList/>} />
        <Route path="/cards" element={<Cards/>} />


      </Routes>
    </div>
  );
}

export default App;
