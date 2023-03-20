import { useState } from 'react';
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState("");
  const HOME = "HOME";
  const SIGNUP = "SIGNUP";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password, name, postalCode }
    props.setCookie(userInfo)
      .then((message) => {
        console.log(message);
        (typeof message === 'object') ? props.setPage(HOME) : setError(message);
      })
  };

  return (
    <div className="auth-form-container">
      {error.length > 0 &&
        (< Error message={error} />)}
      <h2>Register !</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Write Name Here" id="name" name="name" required/>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" required/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
        <label htmlFor="postalCode">Postal Code</label>
        <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="ppostalCode" placeholder="M8M 1R3" id="postalCode" name="postalCode" required/>
        <Button children={SIGNUP} />
      </form>

      <button className="link-btn" onClick={() => props.setPage("LOGIN")}> Already have an account? Log In</button>

    </div>
  );
};
export default Register;