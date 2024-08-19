import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container rounded-5 bg-white">
        <form>
          <h2 className="text-center mb-4">Zarejestruj się</h2>
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
          <div className="d-grid ms-2">
            <button>Zarejestruj się</button>
          </div>
          <br />
          <p className="mt-2 mb-0">Masz już konto?</p>
          <p>
            <Link to="/" className="link-dark">
              Zaloguj się{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
