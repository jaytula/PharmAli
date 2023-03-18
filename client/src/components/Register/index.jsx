import { useState } from 'react';
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState("");
  const HOME = "HOME";
  const SIGNUP = "SIGNUP";

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCookie(email, pass, name, postalCode)
      .then((success) => {
        (success) ? props.setPage(HOME) : setError('Could not register');
      });
  };

  return (
    <div className="auth-form-container">
      {error.length > 0 &&
        (< Error message={error} />)}
      <h2>Register !</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Write Name Here" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <label htmlFor="postalCode">Postal Code</label>
        <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="ppostalCode" placeholder="M8M 1R3" id="postalCode" name="postalCode" />
        <Button children={SIGNUP} />
      </form>

      <button className="link-btn" onClick={() => props.setPage("LOGIN")}> Already have an account? Log In</button>

    </div>
  );
};
export default Register;