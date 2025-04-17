import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function UsersList() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    const usersData = res.data;
    setUsers(usersData);
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  const navigateToUpdate = (user) => {
    navigate(`/user/update/${user.id}`);
  };

  const DeleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    MySwal.fire("User Deleted !!");
  };

  return (
    <div className="container">
      <Link
        to={"/user/add"}
        type="button"
        className="btn btn-primary btn-lg mt-3"
      >
        Add User
      </Link>

      <div className="row">
        <h2 className="text-center">Users List </h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button
                          onClick={() => navigateToUpdate(user)}
                          className="btn btn-info"
                        >
                          Edit{" "}
                        </button>
                      </div>
                      <div className="col">
                        <button
                          onClick={() => DeleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
