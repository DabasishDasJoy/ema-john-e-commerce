import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p className="create-ac">
          <small>
            New to Ema-John?{" "}
            <Link className="create-ac-link" to={"/signup"}>
              Create New Account.
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
