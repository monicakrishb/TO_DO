import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="mobile">Mobile</label>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="tele"
          id="mobile"
          name="mobile"
        />
        <button type="submit">Register</button>
      </form>
      <a href="/login">
        <button className="link-btn">
          Already have an account? Login here.
        </button>
      </a>
    </div>
  );
};
