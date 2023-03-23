import { useState } from 'react';
import "../../styles/login.css"
import Button from '../Button';
import Error from '../Error';
import Navbar2 from '../Home/Navbar2';
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate, useParams } from "react-router-dom";
import pharmaliLogo from "../../assets/images/pharmaliLogo.png";
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
    //   <div class="main">
    //   <section class="signup">
        
    //     <div class="container">
    //       <div class="signup-content">
    //         <form method="POST" id="signup-form" action="/auth/login" class="signup-form">
    //           <h2 class="form-title">Sign In</h2>
    //           <div class="form-group">
    //             <input type="email" required class="form-input" name="email" id="email" placeholder="Your Email" />
    //           </div>
    //           <div class="form-group">
    //             <input type="password" required class="form-input" name="password" id="password"
    //               placeholder="Password" />
    //             <span toggle="#password" class="fa fa-eye field-icon toggle-password"></span>
    //           </div>
    //           <div class="form-group">
    //             <input type="submit" name="submit" id="submit" class="form-submit" value="Sign In" />
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  
    <div className='login__page'>
      <div className='overlay3'>
    <div className='logo'><img className='login_image' src={pharmaliLogo}/> </div>
  </div>
   <div className="auth-form-container">
    
      {error.length > 0 &&
        (< Error message={error} />)}
     <div class="login_container">
         <div class="login-content">
          
      <h1>LOGIN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className='label-login' htmlFor="email">Email : </label>
        <div class="form-group">
        <input className='form-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="placeyouremail@HERE.com" id="email" name="email" required/>
        </div>
        <div class="form-group">
        <label className='label-login' htmlFor="password">Password : </label>
        </div>
        <div class="form-group">
        <input className='form-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" required/>
        </div>
        <button className='login-button' children={LOGIN}></button>
      </form>
      <div className='signup'>

      <button className="link-btn" onClick={() => navigate('/register')}>Dont have an account? Register HERE !</button>
      </div>
    </div> 
    </div> 
    </div> 
    </div>

  );
};
export default Login;