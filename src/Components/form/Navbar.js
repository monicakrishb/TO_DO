import React from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const value = sessionStorage.getItem("useremail");
  const navigate = useNavigate();

  const handleClickss = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" className="nav-link" href="#">
          To Do
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/register" class="nav-link" style={{ color: "white" }}>
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link" style={{ color: "white" }}>
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/logout" class="nav-link" style={{ color: "white" }}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
