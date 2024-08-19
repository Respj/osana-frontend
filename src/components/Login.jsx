import React from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container rounded-5 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <h2 className="text-center mb-4">Zaloguj się</h2>
          <div className="mb-2">
            <label htmlFor="email"></label>
            <input
              className="text"
              type="email"
              placeholder="Wpisz swój adres email"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password"></label>
            <input
              className="text"
              type="password"
              placeholder="Wpisz swoje hasło"
            ></input>
          </div>
          <div className="form-check form-switch ah">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Zapamiętaj mnie
            </label>
          </div>

          <div className="d-grid ms-2">
            <button type="submit">Zaloguj się</button>
          </div>
          <br />
          <p className="mt-2 mb-0">Nie masz jeszcze konta?</p>
          <p>
            <Link to="/signup" className="link-dark">
              Zarejestruj się{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
