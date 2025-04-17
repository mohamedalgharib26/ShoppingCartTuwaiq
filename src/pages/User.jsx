import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Bounce, toast } from "react-toastify";

function User() {
  const MySwal = withReactContent(Swal);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const notify = (msg, type = "success") =>
    toast[msg === "error" ? "error" : "success"](msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    });

  const AddUsers = async () => {
    // تحقق من التكرار
    const isDuplicate = users.some(
      (user) =>
        user.email === userData.email || user.username === userData.username
    );

    if (isDuplicate) {
      notify("البريد الإلكتروني أو اسم المستخدم مستخدم مسبقاً", "error");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/users", userData);
      notify("تمت إضافة المستخدم بنجاح!");
      setUserData({ name: "", username: "", email: "", password: "" });
      fetchUsers(); // تحديث القائمة
    } catch (err) {
      notify("حدث خطأ أثناء الإضافة", "error");
      console.error(err);
    }
  };

  const DeleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    MySwal.fire("تم حذف المستخدم!");
    fetchUsers(); // تحديث القائمة
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFrom = (e) => {
    e.preventDefault();
    AddUsers();
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className="text-center">Users List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            (window.location.href = `/update/${user.id}`)
                          }
                        >
                          Edit
                        </button>
                      </div>
                      <div className="col">
                        <button
                          onClick={() => DeleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1>Add User</h1>
          <form onSubmit={handleFrom}>
            <div className="mb-3">
              <label className="form-label">Name</label>
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
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
