// src/pages/Register.jsx

import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const notify = () =>
    toast("Registered Successfully!", {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      transition: Bounce,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    //   هنا نقدر نضيف البيانات للسيرفر اللي ناوين نسخدم فيه ملف الجيسون
    notify();
    navigate("/login");
  };

  return (
    <>
      <div className="content">
        <div className="card-container">
          <div className="card mt-5 card-style">
            <h1 className="text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
