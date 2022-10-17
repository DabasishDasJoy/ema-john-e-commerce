import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ file: Login.js ~ line 9 ~ Login ~ location", location);

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState(null);

  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <p className="error">{error}</p>
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
