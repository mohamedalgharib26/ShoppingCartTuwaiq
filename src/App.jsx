import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import HomePage from "./pages/Home";
import Cart from "./pages/Cart";
import DashBoard from "./pages/Dashboard.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      {/* هذا هو العنصر المسؤول عن عرض التنبيهات */}
      <ToastContainer />
    </>
  );
}

export default App;
