import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Bounce, toast } from "react-toastify";

function UpdateUser() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const notify = () => toast.success("User Updated successfully!");

  const UpdateNewUser = async () => {
    const res = axios.put(`http://localhost:3000/users/${id}`, userData);
    notify();
    navigate("/user");
  };

  const handleFrom = (e) => {
    e.preventDefault();
    UpdateNewUser(userData);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <h1>Update User</h1>
        <form onSubmit={handleFrom}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.name}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              username
            </label>
            <input
              type="text"
              disabled={true}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.username}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    username: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                });
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
