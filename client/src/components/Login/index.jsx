import { useState } from 'react';
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';
import Navbar2 from '../Home/Navbar2';
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const { setCookie } = useApplicationData()
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const LOGIN = "LOGIN";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {email, password};
    setCookie(userInfo)
    .then((passed) => {
      (passed.userInfo) ? navigate('/'): setError(passed);
    });
  };

  return (
    <>
      <Navbar2 />
    <div className="auth-form-container">
      {error.length > 0 &&
        (< Error message={error} />)}
      <h2>Login </h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" required/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" required/>
        <Button children={LOGIN}/>
      </form>
      <button className="link-btn" onClick={() => navigate('/register')}>Dont have an account? Register</button>
    </div>
    </>

  );
};
export default Login;