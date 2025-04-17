import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Bounce, toast } from "react-toastify";
import { Outlet } from "react-router";

//Toaster
const MySwal = withReactContent(Swal);

const notify = () =>
  toast("User Add successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
function User() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default User;
