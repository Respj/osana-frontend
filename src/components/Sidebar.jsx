import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/NameLogo.png";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        width: "250px",
        backgroundColor: "#FFC5C5",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <div className="position-absolute top-0 start-0 z-0 mx-3 mt-4">
        <a
          href="https://www.osana.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Osana Logo" style={{ width: "215px" }} />
        </a>
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item ">
          <Link to="/" className="nav-link text-dark ">
            Strona główna
          </Link>
        </li>
        <hr className="m-1" />
        <li>
          <Link to="/stats" className="nav-link text-dark">
            Statystyki sprzedaży
          </Link>
        </li>
        <hr className="m-1" />
        <li>
          <Link to="/products" className="nav-link text-dark">
            Dostępne Produkty
          </Link>
        </li>
        <hr className="m-1" />
        <li>
          <Link to="/news" className="nav-link text-dark">
            Ogłoszenia
          </Link>
        </li>
        <hr className="m-1" />
        <li>
          <Link to="/account" className="nav-link text-dark">
            Ustawienia konta
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
