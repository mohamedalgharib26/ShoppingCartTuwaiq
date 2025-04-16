import React from "react";
import { Link } from "react-router-dom"; // ✅ تصحيح المسار

function Header({ children }) {
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
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              {NavLinks.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link active" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* روابط Login و Register */}
            <div className="d-flex gap-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Header;
