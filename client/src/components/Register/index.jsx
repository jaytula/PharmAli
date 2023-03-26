import { useState } from "react";
import Error from "../Error";
import useApplicationData from "../../hooks/useApplicationData";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../styles/login.css";
import "../../styles/register.css";

const Register = (props) => {
  const { setCookie } = useApplicationData();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const SIGNUP = "SIGNUP";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password, name, postalCode };
    setCookie(userInfo)
      .then(({ data: user }) => {
        console.log(user);
        props.setUser(user.id);
        props.setUserInfo(user);
        navigate("/");
      })
      .catch(({ response: data }) => setError(data.data))

  };

  return (
    <div className="register__page">
      <div className="logo-register">
        <img className="register_image" src={logo} alt="register_image" />
      </div>
      <div className="auth-form-container2">
        <div className="register_container">
          <div className="register-content">
            <h1>REGISTER</h1>
            <form className="register-form" onSubmit={handleSubmit}>
              <label className="label-register" htmlFor="name">
                Full Name :{" "}
              </label>
              <div className="form-group">
                <input
                  className="form-inputt"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  placeholder="Write Name Here"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-register" htmlFor="email">
                  Email :{" "}
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-inputt"
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
                <label className="label-register" htmlFor="password">
                  Password :{" "}
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-inputt"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-register" htmlFor="postalCode">
                  Postal Code :{" "}
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-inputt"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="ppostalCode"
                  placeholder="M8M 1R3"
                  id="postalCode"
                  name="postalCode"
                  required
                />
              </div>
              {error.length > 0 && <Error message={error} />}
              <div className="loginButton">
                <button className="login-button" children={SIGNUP}></button>
              </div>
            </form>
            <div className="loginButton">
              <button className="login-button" onClick={() => navigate("/login")}>
                {" "}
                LOGIN{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
