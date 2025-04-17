import React, { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // جلب المستخدمين الموجودين للتحقق من التكرار
    axios.get("http://localhost:3000/users").then((res) => {
      setExistingUsers(res.data);
    });
  }, []);

  const notify = (msg, type = "success") =>
    toast[type](msg, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      transition: Bounce,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !country) {
      notify("Please fill in all fields!", "error");
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match!", "error");
      return;
    }

    // تحقق من الإيميل هل هو موجود مسبقًا
    const alreadyExists = existingUsers.some((user) => user.email === email);
    if (alreadyExists) {
      notify("Email is already registered!", "error");
      return;
    }

    // إنشاء كائن المستخدم الجديد
    const newUser = {
      email,
      password,
      country,
      name: "", // اسم مبدئي فاضي، تقدر تعدله لاحقاً
      username: "", // اسم مستخدم فاضي مبدئياً
    };

    try {
      await axios.post("http://localhost:3000/users", newUser);
      notify("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      notify("Registration failed!", "error");
    }
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
