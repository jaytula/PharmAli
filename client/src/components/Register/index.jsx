import { useState } from 'react';
import "../../styles/login.css";
import "../../styles/register.css";
import Button from '../Button';
import Error from '../Error';
import Navbar2 from '../Home/Navbar2';
import useApplicationData from '../../hooks/useApplicationData';
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Register = (props) => {
  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState("");
  const HOME = "HOME";
  const SIGNUP = "SIGNUP";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password, name, postalCode };
    setCookie(userInfo)
      .then((message) => {
        if (typeof message === 'object') {
          props.setUser(message.id)
          props.setUserInfo(message)
          navigate('/')
        }
        else {
          setError(message);
        }
      });
  };

  return (
    <div className='register__page'>
      <div className='overlay2'>
        <div className='logo'><img className='register_image' src={logo} /> </div>
      </div>
      <div className="auth-form-container2">
        {error.length > 0 &&
          (< Error message={error} />)}
        <div class="register_container">
          <div class="register-content">

            <h1>REGISTER</h1>
            <form className="register-form" onSubmit={handleSubmit}>
              <label className='label-register' htmlFor="name">Full Name : </label>
              <div class="form-group">
                <input className='form-inputt' value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Write Name Here" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label className='label-register' htmlFor="email">Email : </label>
              </div>
              <div class="form-group">
                <input className='form-inputt' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label className='label-register' htmlFor="password">Password : </label>
              </div>
              <div class="form-group">
                <input className='form-inputt' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
              </div>
              <div class="form-group">
                <label className='label-register' htmlFor="postalCode">Postal Code : </label>
              </div>
              <div class="form-group">
                <input className='form-inputt' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="ppostalCode" placeholder="M8M 1R3" id="postalCode" name="postalCode" required />
              </div>
              <button className='login-button' children={SIGNUP} ></button>
            </form>
            <div className='register-signup'>
              <button className="link-btn" onClick={() => navigate('/login')}> Already have an account? LOG IN HERE !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;