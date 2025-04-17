import React, { useState } from "react";

function AddUser() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
  });

  const AddNewUser = () => {
    const res = axios
      .post("http://localhost:3000/users", userData)
      .then((data) => console.log(data))
      .then((result) => {});
    notify();
  };

  const handleFrom = (e) => {
    e.preventDefault();
    console.log(userData);
    AddNewUser(userData);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <h1>Add User</h1>
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

export default AddUser;
