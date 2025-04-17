import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

function UpdateUser() {
  const { id } = useParams(); 
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
  });

  
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(res.data);
    } catch (err) {
      console.error("فشل في جلب البيانات", err);
    }
  };


  useEffect(() => {
    fetchUser();
  }, [id]);


  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, userData);
      toast.success("تم تحديث المستخدم بنجاح!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    } catch (err) {
      toast.error("حدث خطأ أثناء التحديث!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2>Update User</h2>
        <form onSubmit={updateUser}>
          <div className="mb-3">
            <label className="form-label">name</label>
            <input
              type="text"
              className="form-control"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            تحديث
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
