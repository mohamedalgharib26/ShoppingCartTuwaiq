import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Cart from "./pages/Cart";
import DashBoard from "./pages/Dashboard.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UpdateUser from "./pages/UpdateUser.jsx"; // ✅ استيراد مكون التحديث
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";

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
        {/* ✅ إضافة الراوت لتحديث المستخدم */}
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
