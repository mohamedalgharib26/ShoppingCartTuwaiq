import React, { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../context/cartContext";

function Header({ children }) {
  const { cart } = useContext(Context);

  const NavLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Cart",
      url: "/cart",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "User",
      url: "/user",
    },
    {
      title: "Update User",
      url: "/update-user/1",
    },
  ];

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Shopping Cart App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavLinks.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={item.url}
                    >
                      {item.title === "Cart"
                        ? `${item.title}(${cart.length})`
                        : item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link className="navbar-text me-3" to={"/login"}>
              Login
            </Link>
            <Link className="navbar-text" to={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Header;
