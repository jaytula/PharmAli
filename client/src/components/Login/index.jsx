import { useState } from 'react';
import axios from "axios";
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  function validate() {
    return Promise.all([
      axios.get(`/users/${email}`)
    ]).then((data) => {
      console.log(data.data);
    }).catch((err) => console.log(err));
  }

  return (

    <div className="auth-form-container">
      <h2>Login </h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
        <Button onClick={validate}>Save</Button>
      </form>
      <button className="link-btn" onClick={() => props.setPage("REGISTER")}>Dont have an account? Register</button>
    </div>

  );
};
export default Login;