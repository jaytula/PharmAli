import { useState } from 'react';
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const HOME = "HOME";
  const LOGIN = "LOGIN";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {email, password};
    props.setCookie(userInfo)
    .then((passed) => {
      
      (typeof passed === 'object') ? props.setPage(HOME): setError(passed);
    });
  };

  return (
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
      <button className="link-btn" onClick={() => props.setPage("REGISTER")}>Dont have an account? Register</button>
    </div>

  );
};
export default Login;