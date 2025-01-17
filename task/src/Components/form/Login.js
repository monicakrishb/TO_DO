import React, { useState } from "react";
import service from "../../services/API";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../styles/form.css'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const usenavigate = useNavigate();
  const validate = (email, pass) => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      //   toast.warning("Please Enter Username");
    }
    if (pass === "" || pass === null) {
      result = false;
      //   toast.warning("Please Enter Password");
    }
    return result;
  };
  
  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate(email, pass)) {
      try {
        await service.loginget(email).then((response) => {
          if (Object.keys(response.data).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (response.data[0].pass === pass) {
              toast.success("Success");

              sessionStorage.setItem("useremail",email);

              usenavigate("/");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        });
      } catch (err) {
        toast.error("Login Failed due to:" + err.message);
      }
    } else {
      toast.warning("Please enter useremail and password");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={ProceedLogin}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <a href="/register">
        <button className="link-btn">
          Don't have an account? Register here.
        </button>
      </a>
    </div>
  );
};
