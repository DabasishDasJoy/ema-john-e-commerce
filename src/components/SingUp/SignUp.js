import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password did not match!");
      return;
    }
    setError(null);

    createUser(email, password)
      .then((res) => {
        form.reset();
        navigate(from, { replace: true });
        console.log(res.user);
      })
      .catch((error) => console.error(error));
    console.log(email, password, confirm);
  };
  return (
    <div>
      <div className="login-form-container">
        <div className="login-form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div className="form-control">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" name="confirm" />
            </div>
            <p className="error">{error}</p>
            <input className="btn-submit" type="submit" value="Sign Up" />
          </form>
          <p className="create-ac">
            <small>
              Already have an accont?{" "}
              <Link className="create-ac-link" to={"/login"}>
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
