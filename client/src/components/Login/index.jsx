import { useState } from "react";
import "../../styles/login.css";
import Error from "../Error";
import useApplicationData from "../../hooks/useApplicationData";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Login = ({ setUser, setUserInfo }) => {
  // Gather all important helpers and states
  const { setCookie } = useApplicationData();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const LOGIN = "LOGIN";

  // Each time user clicks login
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    setCookie(userInfo)
      .then(({ data: passed }) => {
        setUser(passed.message.id);
        setUserInfo(passed.message);
        navigate("/");
      })
      .catch(({ response: data }) => setError(data.data.message))
  };

  return (
    <div className="login__page">
      <div className="logo">
        <img className="login_image" src={logo} alt="login_image" />{" "}
      </div>
      <div className="auth-form-container">
        <div className="login_container">
          <div className="login-content">
            <h1>LOGIN</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="label-login" htmlFor="email">
                Email :{" "}
              </label>
              <div className="form-group">
                <input
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="placeyouremail@HERE.com"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-login" htmlFor="password">
                  Password :{" "}
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="*******"
                  id="password"
                  name="password"
                  required
                />
              </div>
              {error.length > 0 &&
                (<Error message={error} />)}
              <div className="loginButton">
                <button className="login-button" children={LOGIN}></button>
              </div>
            </form>
            <div className="loginButton">
              <button
                className="login-button"
                onClick={() => navigate("/register")}>
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
