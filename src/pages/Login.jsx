import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () =>
    toast("Login Success!", {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      transition: Bounce,
    });

  const handleFrom = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3000/users");
      const users = res.data;

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        notify();
        navigate("/dashboard");
      } else {
        toast.error("بيانات الدخول غير صحيحة", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error("خطأ في تسجيل الدخول", err);
    }
  };

  return (
    <div className="content">
      <div className="card-container">
        <div className="card mt-5 card-style">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleFrom}>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
